// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// console.log('Extension "HTML Inline Style Conversion" is now active!');

	let disposable = vscode.commands.registerCommand('extension.convertInlineToCSS', () => {

		// console.log('Command "convertInlineToCSS" is executed');

        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const text = document.getText(selection);

            const convertedResult = convertInlineToCSS(text);
            // Replace selected text with converted text
            editor.edit(editBuilder => {
                editBuilder.replace(selection, convertedResult.html);
            });

            // Optionally, output CSS to a new file or console
            vscode.workspace.openTextDocument({ content: convertedResult.css, language: 'css' }).then(doc => {
                vscode.window.showTextDocument(doc);
            });
        }
    });

	context.subscriptions.push(disposable);
}
function convertInlineToCSS(htmlString: string): { html: string; css: string } {
    const classMap = new Map<string, string>();
    let classCounter = 0;
    let cssString = "";

    // Use JSDOM to parse the HTML
    const dom = new JSDOM(htmlString);
    const document = dom.window.document;

    // Function to generate class names
    function generateClassName() {
        return `c-${++classCounter}`;
    }

    // Function to process each element
    function processElement(element: any) {
        const style = element.getAttribute('style');
        if (style) {
            let className = classMap.get(style);
            if (!className) {
                className = generateClassName();
                classMap.set(style, className);
                cssString += `.${className} { ${style} }\n`;
            }
            element.setAttribute('class', className);
            element.removeAttribute('style');
        }

        // Recursively process child elements
        element.childNodes.forEach((child: { nodeType: number; }) => {
            if (child.nodeType === 1) {
                processElement(child as any);
            }
        });
    }

    // Start processing from the body element or documentElement
    processElement(document.body);

    return {
        html: document.documentElement.outerHTML,
        css: cssString,
    };
}


// This method is called when your extension is deactivated
export function deactivate() {}
