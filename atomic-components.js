// This file contains the data for Coveo Atomic components and their properties.
// This data was manually curated from the Coveo Atomic Storybook and official documentation.

const ATOMIC_COMPONENTS = {
    "atomic-aria-live": [],
    "atomic-automatic-facet": [],
    "atomic-automatic-facet-generator": [
       { name: "desired-count", documentation: "The desired count of automatic facets. Minimum: 1 Maximum: 20"},
       { name: "number-of-values", documentation: "The desired number of automatically generated facet values. Minimum: 1" },
    ],
    "atomic-breadbox": [
        { name: "path-limit", documentation: "This prop allows you to control the display depth of the path by specifying the number of parent or ancestor breadcrumbs links relative to the currently selected value. If the path size is equal to or less than the pathLimit, all values in the path will be displayed without truncation. If the path size exceeds the pathLimit, it will truncate the path by replacing the middle values with ellipses ('…​'). Minimum: 1" },
    ],
    "atomic-category-facet": [
        { name: "base-path", documentation: "The base path shared by all values for the facet. e.g., '[\"first value\", \"second value\"]'." },
        { name: "delimiting-character", documentation: "The character that separates values of a multi-value field. Default: ';'." },
        { name: "depends-on", documentation: "The required facets and values for this facet to be displayed. e.g., depends-on-abc=\"doc\"." },
        { name: "facet-id", documentation: "Specifies a unique identifier for the facet." },
        { name: "field", documentation: "The field whose values you want to display in the facet." },
        { name: "filter-by-base-path", documentation: "Whether to use basePath as a filter for the results. Default: true." },
        { name: "filter-facet-count", documentation: "Whether to exclude the parents of folded results when estimating the result count for each facet value. Default: true." },
        { name: "heading-level", documentation: "The heading level to use for the heading over the facet, from 1 to 6. Default: 0." },
        { name: "injection-depth", documentation: "The maximum number of results to scan in the index to ensure that the facet lists all potential facet values. Default: 1000." },
        { name: "is-collapsed", documentation: "Specifies whether the facet is collapsed. Default: false." },
        { name: "label", documentation: "The non-localized label for the facet. Default: 'no-label'." },
        { name: "number-of-values", documentation: "The number of values to request for this facet. Default: 8." },
        { name: "sort-criteria", documentation: "The sort criterion to apply to the returned facet values ('alphanumeric', 'occurrences'). Default: 'occurrences'." },
        { name: "tabs-excluded", documentation: "The tabs on which this facet must not be displayed. e.g., '[\"tabIDA\", \"tabIDB\"]'." },
        { name: "tabs-included", documentation: "The tabs on which the facet can be displayed. e.g., '[\"tabIDA\", \"tabIDB\"]'." },
        { name: "with-search", documentation: "Whether this facet should contain a search box. Default: false." }
    ],
    "atomic-color-facet": [
        { name: "allowed-values", documentation: "Specifies an explicit list of allowedValues in the Search API request. e.g., '[\"Contact\",\"Account\",\"File\"]'." },
        { name: "custom-sort", documentation: "Identifies the facet values that must appear at the top, in this order. e.g., '[\"Contact\",\"Account\",\"File\"]'." },
        { name: "depends-on", documentation: "The required facets and values for this facet to be displayed. e.g., depends-on-abc=\"doc\"." },
        { name: "display-values-as", documentation: "Whether to display the facet values as checkboxes or boxes. ('checkbox', 'box'). Default: 'box'." },
        { name: "facet-id", documentation: "Specifies a unique identifier for the facet." },
        { name: "field", documentation: "The field whose values you want to display in the facet." },
        { name: "filter-facet-count", documentation: "Whether to exclude the parents of folded results when estimating the result count for each facet value. Default: true." },
        { name: "heading-level", documentation: "The heading level to use for the heading over the facet, from 1 to 6. Default: 0." },
        { name: "injection-depth", documentation: "The maximum number of results to scan in the index. Default: 1000." },
        { name: "is-collapsed", documentation: "Specifies whether the facet is collapsed. Default: false." },
        { name: "label", documentation: "The non-localized label for the facet. Default: 'no-label'." },
        { name: "number-of-values", documentation: "The number of values to request for this facet. Default: 8." },
        { name: "results-must-match", documentation: "Specifies how a result must match the selected facet values. ('atLeastOneValue', 'allValues'). Default: 'atLeastOneValue'." },
        { name: "sort-criteria", documentation: "The sort criterion to apply to the returned facet values. ('score', 'alphanumeric', 'alphanumericDescending', 'occurrences', 'automatic', ...). Default: 'automatic'." },
        { name: "tabs-excluded", documentation: "The tabs on which this facet must not be displayed. e.g., '[\"tabIDA\", \"tabIDB\"]'." },
        { name: "tabs-included", documentation: "The tabs on which the facet can be displayed. e.g., '[\"tabIDA\", \"tabIDB\"]'." },
        { name: "with-search", documentation: "Whether this facet should contain a search box. Default: true." }
    ],
    "atomic-component-error": [
        {name: "element", documentation: "HTMLElement"},
        {name: "error", documentation: "Error"},
    ],
    "atomic-did-you-mean": [
        { name: "automatically-correct-query", documentation: "Whether to automatically apply corrections for queries that would otherwise return no results. When true, the component automatically triggers a new query with the suggested term. Default: true." },
        { name: "query-correction-mode", documentation: "Defines which query correction system to use. ('legacy', 'next'). Default: 'next'." }
    ],
    "atomic-external": [
        { name: "bound-interface", documentation: "Represents the bound interface for the AtomicExternal component." },
        { name: "selector", documentation: "The CSS selector for the 'atomic-search-interface' to connect to. Default: 'atomic-search-interface'." }
    ],
    "atomic-facet": [
        { name: "allowed-values", documentation: "Specifies an explicit list of allowed values as a JSON string. The facet will only use these values. e.g., '[\"Contact\",\"Account\",\"File\"]'." },
        { name: "custom-sort", documentation: "Identifies the facet values that must appear at the top, in this order, as a JSON string. e.g., '[\"Contact\",\"Account\",\"File\"]'." },
        { name: "depends-on", documentation: "The required facets and values for this facet to be displayed. e.g., depends-on-abc=\"doc\"." },
        { name: "display-values-as", documentation: "Whether to display the facet values as checkboxes, links, or boxes. ('checkbox', 'link', 'box'). Default: 'checkbox'." },
        { name: "enable-exclusion", documentation: "Whether to allow excluding values from the facet. Default: false." },
        { name: "facet-id", documentation: "Specifies a unique identifier for the facet." },
        { name: "field", documentation: "The field whose values you want to display in the facet. (Required)." },
        { name: "filter-facet-count", documentation: "Whether to exclude the parents of folded results when estimating the result count for each facet value. Default: true." },
        { name: "heading-level", documentation: "The heading level to use for the heading over the facet, from 1 to 6. Default: 0." },
        { name: "injection-depth", documentation: "The maximum number of results to scan in the index. Default: 1000." },
        { name: "is-collapsed", documentation: "Specifies whether the facet is collapsed. Default: false." },
        { name: "label", documentation: "The non-localized label for the facet. Default: 'no-label'." },
        { name: "number-of-values", documentation: "The number of values to request for this facet. Default: 8." },
        { name: "results-must-match", documentation: "Specifies how a result must match the selected facet values. ('atLeastOneValue', 'allValues'). Default: 'atLeastOneValue'." },
        { name: "sort-criteria", documentation: "The sort criterion to apply to the returned facet values. ('score', 'alphanumeric', 'alphanumericDescending', 'occurrences', 'automatic', ...). Default: 'automatic'." },
        { name: "tabs-excluded", documentation: "The tabs on which this facet must not be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." },
        { name: "tabs-included", documentation: "The tabs on which the facet can be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." },
        { name: "with-search", documentation: "Whether this facet should contain a search box. Default: true." }
    ],
    "atomic-facet-manager": [
        { name: "collapse-facets-after", documentation: "The number of expanded facets after which the remaining facets are collapsed. Use 0 to collapse all, and -1 to disable. Default: 4." }
    ],
    "atomic-folded-result-list": [
        { name: "child-field", documentation: "The name of the field that uniquely identifies a result within a collection." },
        { name: "collection-field", documentation: "The name of the field on which to do the folding to resolve result collections." },
        { name: "density", documentation: "The spacing of elements in the result list. ('comfortable', 'compact', 'normal'). Default: 'normal'." },
        { name: "image-size", documentation: "The expected size of the image displayed in the results. ('icon', 'large', 'none', 'small'). Default: 'icon'." },
        { name: "number-of-folded-results", documentation: "The initial number of child results to request for each folded collection. Default: 2." },
        { name: "parent-field", documentation: "The name of the field that determines if a result is a top result containing child results." },
        { name: "tabs-excluded", documentation: "The tabs on which this result list must not be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." },
        { name: "tabs-included", documentation: "The tabs on which this result list can be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." }
    ],
    "atomic-format-currency": [
        { name: "currency", documentation: "The ISO 4217 currency code to use for formatting (e.g., 'USD', 'EUR'). (Required)." }
    ],
    "atomic-format-number": [
        { name: "maximum-fraction-digits", documentation: "The maximum number of fraction digits to use." },
        { name: "maximum-significant-digits", documentation: "The maximum number of significant digits to use." },
        { name: "minimum-fraction-digits", documentation: "The minimum number of fraction digits to use." },
        { name: "minimum-integer-digits", documentation: "The minimum number of integer digits to use." },
        { name: "minimum-significant-digits", documentation: "The minimum number of significant digits to use." }
    ],
    "atomic-format-unit": [
        { name: "unit", documentation: "The unit to use for formatting (e.g., 'liter', 'mile-per-hour'). Must be a sanctioned unit identifier. (Required)." },
        { name: "unit-display", documentation: "The formatting style to use for the unit. ('long', 'short', 'narrow'). Default: 'short'." }
    ],
    "atomic-generated-answer": [
        { name: "answer-configuration-id", documentation: "The unique identifier of the Relevance Generative Answering (RGA) configuration to use." },
        { name: "collapsible", documentation: "Whether the answer can be collapsed if it's taller than max-collapsed-height. Default: false." },
        { name: "max-collapsed-height", documentation: "The maximum height (in rem) of the answer when collapsed. Default: 16." },
        { name: "tabs-excluded", documentation: "The tabs on which this component must not be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." },
        { name: "tabs-included", documentation: "The tabs on which this component can be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." },
        { name: "with-toggle", documentation: "Whether to render a toggle button to hide or show the answer. Default: false." }
    ],
    "atomic-html": [
        { name: "sanitize", documentation: "Whether the content should be sanitized using DOMPurify to prevent XSS attacks. Default: true." },
        { name: "value", documentation: "The string value containing HTML to display. (Required)." }
    ],
    "atomic-load-more-results": [],
    "atomic-no-results": [
        { name: "enable-cancel-last-action", documentation: "Whether to display a button that cancels the last action. Default: true." }
    ],
    "atomic-notifications": [
        { name: "heading-level", documentation: "The heading level to use for the heading above the notifications, from 1 to 6. Default: 0." },
        { name: "icon", documentation: "Specifies an icon to display. Supports URL (http, https, ./), Atomic assets (assets://), or a stringified SVG." }
    ],
    "atomic-numeric-facet": [
        { name: "depends-on", documentation: "The required facets and values for this facet to be displayed. e.g., depends-on-abc=\"doc\"." },
        { name: "display-values-as", documentation: "Whether to display the facet values as checkboxes or links. ('checkbox', 'link'). Default: 'checkbox'." },
        { name: "facet-id", documentation: "Specifies a unique identifier for the facet." },
        { name: "field", documentation: "The field whose values you want to display in the facet. (Required)." },
        { name: "filter-facet-count", documentation: "Whether to exclude the parents of folded results when estimating the result count. Default: true." },
        { name: "heading-level", documentation: "The heading level to use for the heading over the facet, from 1 to 6. Default: 0." },
        { name: "injection-depth", documentation: "The maximum number of results to scan in the index. Default: 1000." },
        { name: "is-collapsed", documentation: "Specifies whether the facet is collapsed. Default: false." },
        { name: "label", documentation: "The non-localized label for the facet. Default: 'no-label'." },
        { name: "number-of-values", documentation: "The number of values to request when no manual ranges are defined. Default: 8." },
        { name: "range-algorithm", documentation: "The algorithm for generating ranges. ('equiprobable', 'even'). Default: 'equiprobable'." },
        { name: "sort-criteria", documentation: "The sort criterion for returned facet values. ('ascending', 'descending'). Default: 'ascending'." },
        { name: "tabs-excluded", documentation: "The tabs on which this facet must not be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." },
        { name: "tabs-included", documentation: "The tabs on which the facet can be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." },
        { name: "with-input", documentation: "Whether this facet should contain an input for custom ranges. ('decimal', 'integer')." }
    ],
    "atomic-pager": [
        { name: "next-button-icon", documentation: "The SVG icon for the 'Next' button. Supports URL, Atomic assets (assets://), or a stringified SVG." },
        { name: "number-of-pages", documentation: "The number of page buttons to display in the pager. Default: 5." },
        { name: "previous-button-icon", documentation: "The SVG icon for the 'Previous' button. Supports URL, Atomic assets (assets://), or a stringified SVG." }
    ],
    "atomic-popover": [],
    "atomic-query-error": [],
    "atomic-query-summary": [],
    "atomic-rating-facet": [
        { name: "depends-on", documentation: "The required facets and values for this facet to be displayed. e.g., depends-on-abc=\"doc\"." },
        { name: "display-values-as", documentation: "Whether to display the facet values as checkboxes or links. ('checkbox', 'link'). Default: 'checkbox'." },
        { name: "facet-id", documentation: "Specifies a unique identifier for the facet." },
        { name: "field", documentation: "The field whose values you want to display in the facet. (Required)." },
        { name: "filter-facet-count", documentation: "Whether to exclude the parents of folded results when estimating the result count. Default: true." },
        { name: "heading-level", documentation: "The heading level to use for the heading over the facet, from 1 to 6. Default: 0." },
        { name: "icon", documentation: "The SVG icon for the rating. Supports URL, Atomic assets (assets://), or a stringified SVG. Default: 'Star'." },
        { name: "injection-depth", documentation: "The maximum number of results to scan in the index. Default: 1000." },
        { name: "is-collapsed", documentation: "Specifies whether the facet is collapsed. Default: false." },
        { name: "label", documentation: "The non-localized label for the facet. Default: 'no-label'." },
        { name: "max-value-in-index", documentation: "The maximum value in the field's index, which also defines the number of icons. Defaults to the value of `number-of-intervals`." },
        { name: "min-value-in-index", documentation: "The minimum value of the field. Default: 1." },
        { name: "number-of-intervals", documentation: "The number of rating options to display. Default: 5." },
        { name: "tabs-excluded", documentation: "The tabs on which this facet must not be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." },
        { name: "tabs-included", documentation: "The tabs on which the facet can be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." }
    ],
    "atomic-rating-range-facet": [
        { name: "depends-on", documentation: "The required facets and values for this facet to be displayed. e.g., depends-on-abc=\"doc\"." },
        { name: "facet-id", documentation: "Specifies a unique identifier for the facet." },
        { name: "field", documentation: "The field whose values you want to display in the facet. (Required)." },
        { name: "filter-facet-count", documentation: "Whether to exclude the parents of folded results when estimating the result count. Default: true." },
        { name: "heading-level", documentation: "The heading level to use for the heading over the facet, from 1 to 6. Default: 0." },
        { name: "icon", documentation: "The SVG icon for the rating. Supports URL, Atomic assets (assets://), or a stringified SVG. Default: 'Star'." },
        { name: "injection-depth", documentation: "The maximum number of results to scan in the index. Default: 1000." },
        { name: "is-collapsed", documentation: "Specifies whether the facet is collapsed. Default: false." },
        { name: "label", documentation: "The non-localized label for the facet. Default: 'no-label'." },
        { name: "max-value-in-index", documentation: "The maximum value in the field's index, which also defines the number of icons. Defaults to the value of `number-of-intervals`." },
        { name: "min-value-in-index", documentation: "The minimum value of the field. Default: 1." },
        { name: "number-of-intervals", documentation: "The number of rating options to display. Default: 5." },
        { name: "tabs-excluded", documentation: "The tabs on which this facet must not be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." },
        { name: "tabs-included", documentation: "The tabs on which the facet can be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." }
    ],
    "atomic-refine-modal": [
        { name: "collapse-facets-after", documentation: "The number of expanded facets inside the refine modal. Remaining facets are automatically collapsed. Use 0 to collapse all. Default: 0." }
    ],
    "atomic-refine-toggle": [
        { name: "collapse-facets-after", documentation: "The number of expanded facets inside the refine modal. Remaining facets are automatically collapsed. Use 0 to collapse all. Default: 0." }
    ],
    "atomic-relevance-inspector": [
        { name: "bindings", documentation: "The Atomic interface bindings, namely the headless search engine and i18n instances." },
        { name: "open", documentation: "Whether the relevance inspector is open by default. Default: false." },
    ],
    "atomic-result": [
        { name: "classes", documentation: "A space-delimited list of classes to add to the result element." },
        { name: "content", documentation: "The result content to display" },
        { name: "density", documentation: "The spacing of various elements in the result. ('comfortable', 'compact', 'normal'). Default: 'normal'." },
        { name: "display", documentation: "How the result should be displayed. ('grid', 'list', 'table'). Default: 'list'." },
        { name: "image-size", documentation: "The size of the visual section in the result. ('icon', 'large', 'none', 'small'). Default: 'icon'." },        
        { name: "stop-propagation", documentation: "Whether an atomic-result-link inside the result should stop click event propagation." }
    ],
    "atomic-result-children": [
        { name: "image-size", documentation: "The expected size of the image displayed in the children results. ('icon', 'large', 'none', 'small')." },
        { name: "inherit-templates", documentation: "Whether to inherit templates defined in a parent atomic-result-children. Default: false." },
        { name: "no-result-text", documentation: "The text to display when there are no child results. Default: 'no-documents-related'." }
    ],
    "atomic-result-children-template": [
        { name: "must-match", documentation: "The field and values for which this template must apply. e.g., must-match-filetype=\"pdf,doc\"." },
        { name: "must-not-match", documentation: "The field and values for which this template must not apply. e.g., must-not-match-author=\"John Doe\"." }
    ],
    "atomic-result-list": [
        { name: "density", documentation: "The spacing of elements in the result list. ('comfortable', 'compact', 'normal'). Default: 'normal'." },
        { name: "display", documentation: "The layout to use for displaying results. ('grid', 'list', 'table'). Default: 'list'." },
        { name: "image-size", documentation: "The expected size of the image displayed in the results. ('icon', 'large', 'none', 'small'). Default: 'icon'." },
        { name: "tabs-excluded", documentation: "The tabs on which this result list must not be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." },
        { name: "tabs-included", documentation: "The tabs on which this result list can be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." }
    ],
    "atomic-result-template": [
        { name: "must-match", documentation: "The field and values for which this template must apply. e.g., must-match-filetype=\"pdf,doc\"." },
        { name: "must-not-match", documentation: "The field and values for which this template must not apply. e.g., must-not-match-author=\"John Doe\"." }
    ],
    "atomic-results-per-page": [
        { name: "choices-displayed", documentation: "A comma-separated list of choices for the number of results to display per page. Default: '10,25,50,100'." },
        { name: "initial-choice", documentation: "The initial selection for the number of results per page. Must be a value from `choices-displayed`." }
    ],
    "atomic-search-box": [
        { name: "clear-filters", documentation: "Whether to clear all active filters when a new query is submitted. Default: true." },
        { name: "disable-search", documentation: "Whether to prevent the user from triggering searches. Default: false." },
        { name: "enable-query-syntax", documentation: "Whether to interpret advanced Coveo Cloud query syntax. Default: false." },
        { name: "minimum-query-length", documentation: "The minimum query length required to enable search. Set to 1 to disable empty searches. Default: 0." },
        { name: "number-of-queries", documentation: "The number of suggestions to display. Default: 8." },
        { name: "redirection-url", documentation: "The URL to redirect to when a query is submitted, making the search box standalone." },
        { name: "suggestion-delay", documentation: "The delay (in ms) before sending a suggestion request after the user stops typing. Default: 0." },
        { name: "suggestion-timeout", documentation: "The timeout (in ms) for suggestion queries. Default: 400." }
    ],
    "atomic-search-box-recent-queries": [
        { name: "max-with-no-query", documentation: "Maximum number of recent queries to display when the search box is empty. Default: 5." },
        { name: "max-with-query", documentation: "Maximum number of recent queries to display when the search box is not empty. Default: 2." }
    ],
    "atomic-search-box-query-suggestions": [
        { name: "icon", documentation: "The SVG icon to display. Supports URL, Atomic assets (assets://), or a stringified SVG." },
        { name: "max-with-query", documentation: "The maximum number of suggestions to display when the user has typed in the input." },
        { name: "max-without-query", documentation: "The maximum number of suggestions to display when the input is empty." }
    ],
    "atomic-search-box-recent-queries": [
        { name: "icon", documentation: "The SVG icon to display. Supports URL, Atomic assets (assets://), or a stringified SVG." },
        { name: "max-with-query", documentation: "The maximum number of recent queries to display when the user has typed in the input. Default: 3." },
        { name: "max-without-query", documentation: "The maximum number of recent queries to display when the input is empty." }
    ],
    "atomic-search-interface": [
        { name: "csp-nonce", documentation: "The nonce for inline scripts and styles to comply with Content Security Policy (CSP)." },
        { name: "analytics", documentation: "Whether analytics should be enabled. Default: true." },
        { name: "enable-relevance-inspector", documentation: "Whether the relevance inspector shortcut (Alt/Option + double-click) should be enabled. Default: true." },
        { name: "fields-to-include", documentation: "A JSON string array of non-default fields to include in query results. e.g., '[\"fieldA\", \"fieldB\"]'." },
        { name: "icon-assets-path", documentation: "The path to the icon assets folder. Default: './assets'." },
        { name: "language", documentation: "The language for the interface. Default: 'en'." },
        { name: "language-assets-path", documentation: "The path to the language assets folder. Default: './lang'." },
        { name: "log-level", documentation: "The severity level of messages to log to the console. ('debug', 'error', 'info', ...)." },
        { name: "pipeline", documentation: "The query pipeline to use for the search interface." },
        { name: "reflect-state-in-url", documentation: "Whether the search state should be reflected in the URL parameters. Default: true." },
        { name: "scroll-container", documentation: "The CSS selector for the container to scroll back to on new results. Default: 'atomic-search-interface'." },
        { name: "search-hub", documentation: "The search hub to use for the search interface." },
        { name: "timezone", documentation: "The tz database identifier for the timezone (e.g., 'America/Montreal'). Guessed by default." }
    ],
    "atomic-search-layout": [
        { name: "mobile-breakpoint", documentation: "The CSS value (e.g., '800px', '65rem') that defines the breakpoint between the mobile and desktop layouts." }
    ],
    "atomic-segmented-facet": [
        { name: "allowed-values", documentation: "Specifies an explicit list of allowed values as a JSON string. e.g., '[\"Contact\",\"Account\"]'." },
        { name: "custom-sort", documentation: "Identifies facet values that must appear at the top, in order, as a JSON string. e.g., '[\"Contact\",\"Account\"]'." },
        { name: "depends-on", documentation: "The required facets and values for this facet to be displayed. e.g., depends-on-abc=\"doc\"." },
        { name: "facet-id", documentation: "Specifies a unique identifier for the facet." },
        { name: "field", documentation: "The field whose values you want to display in the facet. (Required)." },
        { name: "filter-facet-count", documentation: "Whether to exclude the parents of folded results when estimating the result count. Default: true." },
        { name: "injection-depth", documentation: "The maximum number of results to scan in the index. Default: 1000." },
        { name: "label", documentation: "The non-localized label for the facet." },
        { name: "number-of-values", documentation: "The number of values to request for this facet. Default: 6." },
        { name: "sort-criteria", documentation: "The sort criterion for returned facet values. ('score', 'alphanumeric', 'occurrences', 'automatic', ...). Default: 'automatic'." },
        { name: "tabs-excluded", documentation: "The tabs on which this facet must not be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." },
        { name: "tabs-included", documentation: "The tabs on which this facet can be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." }
    ],
    "atomic-segmented-facet-scrollable": [],
    "atomic-smart-snippet": [
        { name: "collapsed-height", documentation: "When the answer is collapsed, this is the height in pixels that remains visible. Default: 180." },
        { name: "heading-level", documentation: "The heading level (1 to 5) for the question at the top of the snippet. Default: 0." },
        { name: "maximum-height", documentation: "The maximum height in pixels a snippet can have before it is collapsed. Default: 250." },
        { name: "tabs-excluded", documentation: "The tabs on which this smart snippet must not be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." },
        { name: "tabs-included", documentation: "The tabs on which the smart snippet can be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." }
    ],
    "atomic-smart-snippet-feedback-modal": [
        { name: "is-open", documentation: "Whether the feedback modal is open by default. Default: false." }
    ],
    "atomic-smart-snippet-suggestions": [
        { name: "heading-level", documentation: "The heading level (1 to 5) for the 'People also ask' title. Default: 0." },
        { name: "snippet-style", documentation: "Sets the style of the snippets." },
    ],
    "atomic-sort-dropdown": [],
    "atomic-sort-expression": [
        { name: "expression", documentation: "The sort criteria to apply (e.g., 'relevancy', 'date descending', 'size ascending'). (Required)." },
        { name: "label", documentation: "The non-localized label to display for this sort option. (Required)." },
        { name: "tabs-excluded", documentation: "The tabs on which this sort option must not be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." },
        { name: "tabs-included", documentation: "The tabs on which this sort option can be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." }
    ],
    "atomic-tab": [
        { name: "expression", documentation: "The constant query expression (cq) to apply when the tab is active." },
        { name: "label", documentation: "The label to display on the tab. (Required)." },
        { name: "name", documentation: "The internal name of the atomic tab. (Required)." }
    ],
    "atomic-tab-manager": [
        { name: "clear-filters-on-tab-change", documentation: "Whether to clear the filters when the active tab changes. Default: false." }
    ],
    "atomic-table-element": [
        { name: "label", documentation: "The label to display in the header of this column. (Required)." }
    ],
    "atomic-text": [
        { name: "count", documentation: "The count value used for plural translations." },
        { name: "value", documentation: "The string key for the translation value. (Required)." }
    ],
    "atomic-timeframe-facet": [
        { name: "depends-on", documentation: "The required facets and values for this facet to be displayed. e.g., depends-on-abc=\"doc\"." },
        { name: "facet-id", documentation: "Specifies a unique identifier for the facet." },
        { name: "field", documentation: "The field whose values you want to display in the facet. Default: 'date'." },
        { name: "filter-facet-count", documentation: "Whether to exclude the parents of folded results when estimating the result count. Default: true." },
        { name: "heading-level", documentation: "The heading level to use for the heading over the facet, from 1 to 6. Default: 0." },
        { name: "injection-depth", documentation: "The maximum number of results to scan in the index. Default: 1000." },
        { name: "is-collapsed", documentation: "Specifies whether the facet is collapsed. Default: false." },
        { name: "label", documentation: "The non-localized label for the facet. Default: 'no-label'." },
        { name: "max", documentation: "The latest date to accept from user input (YYYY-MM-DD) when the date picker is enabled." },
        { name: "min", documentation: "The earliest date to accept from user input (YYYY-MM-DD) when the date picker is enabled." },
        { name: "sort-criteria", documentation: "The sort criterion for returned facet values. ('ascending', 'descending'). Default: 'descending'." },
        { name: "tabs-excluded", documentation: "The tabs on which this facet must not be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." },
        { name: "tabs-included", documentation: "The tabs on which the facet can be displayed, as a JSON string. e.g., '[\"tabIDA\", \"tabIDB\"]'." },
        { name: "with-date-picker", documentation: "Whether this facet should contain a datepicker for custom ranges. Default: false." }
    ],
    // result-template-components
    "atomic-field-condition": [
        { name: "if-defined", documentation: "A comma-separated list of fields that must have a value for this condition to apply." },
        { name: "if-not-defined", documentation: "A comma-separated list of fields that must not have a value for this condition to apply." },
        { name: "must-match", documentation: "The field and values for which this condition must apply. e.g., must-match-filetype=\"pdf,doc\"." },
        { name: "must-not-match", documentation: "The field and values for which this condition must not apply. e.g., must-not-match-author=\"John Doe\"." }
    ],
    "atomic-quickview": [
        { name: "sandbox", documentation: "The sandbox attribute for the quickview iframe. `allow-same-origin` is required. Default: 'allow-popups allow-top-navigation allow-same-origin'." }
    ],
    "atomic-result-badge": [
        { name: "field", documentation: "The result field to display in the badge. Incompatible with `label`." },
        { name: "icon", documentation: "Specifies an icon to display. Supports URL (http, https, ./), Atomic assets (assets://), or a stringified SVG." },
        { name: "label", documentation: "The static text to display in the badge. Incompatible with `field`." }
    ],
    "atomic-result-date": [
        { name: "field", documentation: "The result field containing the date value. Default: 'date'." },
        { name: "format", documentation: "The format to apply to the date, using day.js syntax. Default: 'D/M/YYYY'." },
        { name: "relative-time", documentation: "Whether the date should be displayed in a relative time format (e.g., '2 hours ago')." }
    ],
    "atomic-result-fields-list": [],
    "atomic-result-html": [
        { name: "field", documentation: "The result field containing the HTML to display. (Required)." },
        { name: "sanitize", documentation: "Whether the content should be sanitized using DOMPurify to prevent XSS attacks. Default: true." }
    ],
    "atomic-result-icon": [],
    "atomic-result-image": [
        { name: "fallback", documentation: "An optional fallback image URL to use if the primary image is unavailable." },
        { name: "field", documentation: "The result field containing the image URL. (Required)." },
        { name: "image-alt-field", documentation: "The result field containing the alt text for the image." }
    ],
    "atomic-result-link": [
        { name: "href-template", documentation: "A template literal to generate the href attribute, allowing for dynamic links based on result properties. e.g., `${clickUri}?id=${raw.itemtitle}`." }
    ],
    "atomic-result-localized-text": [
        { name: "field", documentation: "A dynamic attribute that maps a result field to a localization parameter. e.g., `field-author=\"name\"` assigns the 'author' field value to the 'name' parameter in the translation." },
        { name: "field-count", documentation: "The numerical result field to use for pluralization." },
        { name: "locale-key", documentation: "The i18n translation key to use. (Required)." }
    ],
    "atomic-result-multi-value-text": [
        { name: "delimiter", documentation: "The delimiter to use for splitting values if the field is not indexed as multi-value." },
        { name: "field", documentation: "The multi-value result field to display. (Required)." },
        { name: "max-values-to-display", documentation: "The maximum number of values to display before showing a 'n more...' message. Default: 3." }
    ],"atomic-result-number": [
        { name: "field", documentation: "The result field containing the number to display. (Required)." }
    ],
    "atomic-result-printable-uri": [
        { name: "max-number-of-parts", documentation: "The maximum number of URI parts to display before using an ellipsis. Default: 5." }
    ],
    "atomic-result-rating": [
        { name: "field", documentation: "The result field containing the rating value. (Required)." },
        { name: "icon", documentation: "The SVG icon for the rating. Supports URL, Atomic assets (assets://), or a stringified SVG. Default: 'Star'." },
        { name: "max-value-in-index", documentation: "The maximum value of the rating field, which also determines the number of icons to display. Default: 5." }
    ],
    "atomic-result-section-actions": [],
    "atomic-result-section-badges": [],
    "atomic-result-section-bottom-metadata": [],
    "atomic-result-section-children": [],
    "atomic-result-section-emphasized": [],
    "atomic-result-section-excerpt": [],
    "atomic-result-section-title": [],
    "atomic-result-section-title-metadata": [],
    "atomic-result-section-visual": [
        { name: "image-size", documentation: "How large or small the visual section of results should be. ('icon', 'large', 'none', 'small')." }
    ],
    "atomic-result-text": [
        { name: "default", documentation: "The locale key for the text to display if the specified field has no value." },
        { name: "field", documentation: "The result field containing the text to display. (Required)." },
        { name: "should-highlight", documentation: "Whether the component should highlight text based on the search API's highlighting properties. Default: true." }
    ],
    "atomic-result-timespan": [
        { name: "field", documentation: "The result field containing the timespan value. (Required)." },
        { name: "format", documentation: "The format to apply to the timespan, using day.js duration syntax." },
        { name: "unit", documentation: "The unit of measurement for the field value (e.g., 'ms', 's', 'd'). Default: 'ms'." }
    ],
    "atomic-recs-error": [],
    "atomic-recs-interface": [
        { name: "csp-nonce", documentation: "The nonce for inline scripts and styles to comply with Content Security Policy (CSP)." },
        { name: "analytics", documentation: "Whether analytics should be enabled. Default: true." },
        { name: "fields-to-include", documentation: "A JSON string array of non-default fields to include in results. e.g., '[\"fieldA\", \"fieldB\"]'." },
        { name: "icon-assets-path", documentation: "The path to the icon assets folder. Default: './assets'." },
        { name: "language", documentation: "The language for the interface. Default: 'en'." },
        { name: "language-assets-path", documentation: "The path to the language assets folder. Default: './lang'." },
        { name: "log-level", documentation: "The severity level of messages to log to the console. ('debug', 'error', 'info', ...)." },
        { name: "pipeline", documentation: "The query pipeline to use for the recommendations interface." },
        { name: "search-hub", documentation: "The search hub to use for the recommendations interface." },
        { name: "timezone", documentation: "The tz database identifier for the timezone (e.g., 'America/Montreal'). Guessed by default." }
    ],
    "atomic-recs-list": [
        { name: "density", documentation: "The spacing of elements in the result list. ('comfortable', 'compact', 'normal'). Default: 'normal'." },
        { name: "display", documentation: "The layout to apply to results. ('grid', 'list'). Default: 'list'." },
        { name: "heading-level", documentation: "The heading level (1-6) for the list's label. Default: 0." },
        { name: "image-size", documentation: "The expected size of the image in results. ('icon', 'large', 'none', 'small'). Default: 'small'." },
        { name: "label", documentation: "The non-localized label for the list of recommendations." },
        { name: "number-of-recommendations", documentation: "The total number of recommendations to display. Default: 10." },
        { name: "number-of-recommendations-per-page", documentation: "The number of recommendations per page. Setting this activates the carousel." },
        { name: "recommendation", documentation: "The Recommendation identifier from the Coveo platform. Default: 'Recommendation'." }
    ],
    "atomic-recs-result": [
        { name: "classes", documentation: "A space-delimited list of classes to add to the result element." },
        { name: "density", documentation: "The size of the results. ('comfortable', 'compact', 'normal'). Default: 'normal'." },
        { name: "display", documentation: "The layout to apply to display results. ('grid', 'list', 'table'). Default: 'list'." },
        { name: "image-size", documentation: "The size of the visual section in result list items. ('icon', 'large', 'none', 'small'). Default: 'icon'." },
        { name: "stop-propagation", documentation: "Whether an atomic-result-link inside this result should stop click event propagation." }
    ],
    "atomic-rec-result-template": [
        { name: "if-defined", documentation: "A comma-separated list of fields that must be defined for this template to apply." },
        { name: "if-not-defined", documentation: "A comma-separated list of fields that must NOT be defined for this template to apply." },
        { name: "must-match", documentation: "The field and values for which this template must apply. e.g., `must-match-filetype=\"pdf,doc\"`." },
        { name: "must-not-match", documentation: "The field and values for which this template must not apply. e.g., `must-not-match-author=\"John Doe\"`." }
    ],
    "atomic-icon": [
        { name: "icon", documentation: "The SVG icon to display. Supports URL (http, https, ./), Atomic assets (assets://), or a stringified SVG. (Required)." }
    ],
    "atomic-layout-section": [
        { name: "max-width", documentation: "For column sections, the maximum horizontal space it should take (e.g., '300px')." },
        { name: "min-width", documentation: "For column sections, the minimum horizontal space it should take (e.g., '300px')." },
        { name: "section", documentation: "The name of the layout section. ('facets', 'main', 'search', 'status', etc.). (Required)." }
    ],
    "atomic-numeric-range": [
        { name: "end", documentation: "The ending value for the numeric range. (Required)." },
        { name: "end-inclusive", documentation: "Whether the end value should be included in the range. Default: false." },
        { name: "label", documentation: "The non-localized label for the facet, which will appear in the breadbox." },
        { name: "start", documentation: "The starting value for the numeric range. (Required)." }
    ],
    "atomic-timeframe": [
        { name: "amount", documentation: "The number of units for the timeframe. Default: 1." },
        { name: "label", documentation: "The non-localized label for the timeframe, which will appear in the breadbox." },
        { name: "period", documentation: "The relative period of time. ('next', 'past'). Default: 'past'." },
        { name: "unit", documentation: "The unit of time for the timeframe. ('day', 'hour', 'minute', 'month', 'quarter', 'week', 'year'). (Required)." }
    ]
};

module.exports = {
    ATOMIC_COMPONENTS
};
