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
            // Check if the user is typing a tag name (e.g., <atomic-)
            if (linePrefix.endsWith('<atomic-')) {
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

    context.subscriptions.push(provider);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate
}
