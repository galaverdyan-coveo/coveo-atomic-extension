// The module 'vscode' contains the VS Code extensibility API
const vscode = require('vscode');
// Import the component data
const { ATOMIC_COMPONENTS } = require('./atomic-components');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Coveo Atomic Autocomplete extension is now active!');

    // --- Completion Provider for Atomic Tags and Attributes ---
    const provider = vscode.languages.registerCompletionItemProvider('html', {
        provideCompletionItems(document, position) {
            // Get the entire line of text and the text before the cursor
            const linePrefix = document.lineAt(position).text.substr(0, position.character);

            // --- Tag Name Completion ---
            // Check if the user is typing a tag name (e.g., <ato)
            if (linePrefix.endsWith('<ato')) {
                // Return a completion item for each Atomic component
                return Object.keys(ATOMIC_COMPONENTS).map(componentName => {
                    const snippetCompletion = new vscode.CompletionItem(componentName);
                    snippetCompletion.insertText = new vscode.SnippetString(`${componentName}>$0</${componentName}>`);
                    snippetCompletion.documentation = new vscode.MarkdownString(`Inserts the ${componentName} component.`);
                    snippetCompletion.kind = vscode.CompletionItemKind.Class;
                    return snippetCompletion;
                });
            }

            // --- Attribute Completion ---
            // Regex to find the opening tag to the left of the cursor
            const tagRegex = /<([a-zA-Z0-9-]+)\s*[^>]*$/;
            const match = linePrefix.match(tagRegex);

            if (!match) {
                return undefined;
            }

            const tagName = match[1];

            // Check if the tag is an Atomic component
            if (ATOMIC_COMPONENTS[tagName]) {
                const componentAttributes = ATOMIC_COMPONENTS[tagName];

                // Return a completion item for each attribute of the component
                return componentAttributes.map(attr => {
                    const snippetCompletion = new vscode.CompletionItem(attr.name);
                    // Create a snippet that inserts the attribute and positions the cursor
                    snippetCompletion.insertText = new vscode.SnippetString(`${attr.name}="$1"`);
                    snippetCompletion.documentation = new vscode.MarkdownString(attr.documentation || `The \`${attr.name}\` attribute.`);
                    snippetCompletion.kind = vscode.CompletionItemKind.Property;
                    return snippetCompletion;
                });
            }

            return undefined;
        }
    }, '<', ' '); // Trigger completion when the user types '<' or a space

    
    // --- Hover Provider for Atomic Component Attributes ---
    const hoverProvider = vscode.languages.registerHoverProvider('html', {
        provideHover(document, position) {
            // Get the text range at the position
            const wordRange = document.getWordRangeAtPosition(position, /[a-zA-Z0-9-]+/);
            if (!wordRange) {
                return undefined;
            }

            const hoveredWord = document.getText(wordRange);
            
            // Get the line text to find the context
            const line = document.lineAt(position.line).text;
            
            // Find the opening tag that contains this position
            const beforeCursor = line.substring(0, position.character);
            const afterCursor = line.substring(position.character);
            
            // Look for the tag pattern - search backwards and forwards from cursor
            let tagStart = beforeCursor.lastIndexOf('<');
            let tagEnd = afterCursor.indexOf('>');
            
            if (tagStart === -1) {
                // Look in previous lines if tag starts there
                for (let i = position.line - 1; i >= 0; i--) {
                    const prevLine = document.lineAt(i).text;
                    const lastOpenTag = prevLine.lastIndexOf('<');
                    if (lastOpenTag !== -1) {
                        // Check if this tag is still open (no closing > after it)
                        const closingTag = prevLine.substring(lastOpenTag).indexOf('>');
                        if (closingTag === -1) {
                            tagStart = lastOpenTag;
                            break;
                        }
                    }
                }
            }
            
            if (tagEnd === -1) {
                // Look in following lines for the closing >
                for (let i = position.line + 1; i < document.lineCount; i++) {
                    const nextLine = document.lineAt(i).text;
                    const firstCloseTag = nextLine.indexOf('>');
                    if (firstCloseTag !== -1) {
                        tagEnd = firstCloseTag;
                        break;
                    }
                }
            }
            
            if (tagStart === -1 || tagEnd === -1) {
                return undefined;
            }
            
            // Extract the full tag content
            let fullTagContent = '';
            if (tagStart >= 0 && tagStart < beforeCursor.length) {
                fullTagContent = beforeCursor.substring(tagStart);
            }
            if (tagEnd >= 0) {
                fullTagContent += afterCursor.substring(0, tagEnd + 1);
            }
            
            // Extract tag name from the full tag content
            const tagNameMatch = fullTagContent.match(/<([a-zA-Z0-9-]+)/);
            if (!tagNameMatch) {
                return undefined;
            }
            
            const tagName = tagNameMatch[1];
            
            // Check if this is an Atomic component
            if (!ATOMIC_COMPONENTS[tagName]) {
                return undefined;
            }
            
            // Check if the hovered word is an attribute of this component
            const componentAttributes = ATOMIC_COMPONENTS[tagName];
            const matchingAttribute = componentAttributes.find(attr => attr.name === hoveredWord);
            
            if (matchingAttribute) {
                const hoverContent = new vscode.MarkdownString();
                hoverContent.appendCodeblock(`${hoveredWord}`, 'html');
                hoverContent.appendMarkdown(`**${tagName}** attribute\n\n`);
                hoverContent.appendMarkdown(matchingAttribute.documentation);
                
                return new vscode.Hover(hoverContent, wordRange);
            }
            
            // If hovering over the tag name itself, show component info
            if (hoveredWord === tagName) {
                const hoverContent = new vscode.MarkdownString();
                hoverContent.appendCodeblock(`<${tagName}>`, 'html');
                hoverContent.appendMarkdown(`**Coveo Atomic Component**\n\n`);
                
                if (componentAttributes.length > 0) {
                    hoverContent.appendMarkdown(`Available attributes:\n`);
                    componentAttributes.forEach(attr => {
                        hoverContent.appendMarkdown(`- \`${attr.name}\`: ${attr.documentation}\n`);
                    });
                } else {
                    hoverContent.appendMarkdown(`This component has no configurable attributes.`);
                }
                
                return new vscode.Hover(hoverContent, wordRange);
            }
            
            return undefined;
        }
    });

    context.subscriptions.push(provider);
    context.subscriptions.push(hoverProvider);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate
}
