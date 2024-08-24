HTML Inline Styles to CSS
=========================

This Visual Studio Code extension allows you to quickly convert HTML inline styles to separate CSS classes. It helps in maintaining cleaner and more manageable code by moving inline styles out of your HTML.

Features
--------

*   **Convert Inline Styles to CSS:** Select any HTML with inline styles, and with a simple command, convert those styles to a CSS class.
*   **Automatic Class Naming:** The extension automatically generates unique class names (e.g., `.c-1`, `.c-2`) to ensure no conflicts.
*   **CSS Output:** The corresponding CSS is automatically generated and displayed in a new document, ready for you to copy into your stylesheet.

### Example

**Before:**

    <body style="margin: 38px; padding: 20px;">

**After:**

**HTML:**

    <body class="c-1">

**CSS:**

    .c-1 {
        margin: 38px;
        padding: 20px;
    }
    

Installation
------------

1.  Open Visual Studio Code.
2.  Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or pressing `Ctrl+Shift+X`.
3.  Search for `HTML Inline Styles to CSS`.
4.  Click **Install** to install the extension.

Usage
-----

1.  Open any HTML file in Visual Studio Code.
2.  Select the HTML element(s) with inline styles you want to convert.
3.  Open the Command Palette by pressing `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac).
4.  Type `Convert Inline Styles to CSS` and press `Enter`.
5.  The selected inline styles will be replaced with a class, and the corresponding CSS will be generated and displayed in a new document.

Configuration
-------------

Currently, there are no configurable settings for this extension. If you have any feature requests or ideas, feel free to open an issue on GitHub.

Known Issues
------------

*   **Duplicate Styles:** If similar inline styles are found across multiple elements, the extension will create separate classes for each, potentially leading to redundant CSS. Future updates may address this by merging similar styles.
*   **Limited Support for Complex Styles:** Complex or shorthand styles might not be fully supported yet.

Contributing
------------

Contributions are welcome! If you find any issues or want to add a feature, please contact [GitHub](https://github.com/dongquoctien).

Release Notes
-------------

### 1.0.0

*   Initial release of HTML Inline Styles to CSS.
