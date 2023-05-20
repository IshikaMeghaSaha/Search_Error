
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	//console.log('Congratulations, your extension "codewithease" is now active!');
	const searchError = async () => {
		const searchQuery = await vscode.window.showInputBox({
			placeHolder: "Search error",
			prompt: "Search my error type on Stack Overflow"
		});
		if (searchQuery === '') {
			console.log(searchQuery);
			vscode.window.showErrorMessage('A search query is mandatory to execute this action');
		}

		else if (searchQuery !== undefined) {
			const searchUrl = `https://stackoverflow.com/search?q=${searchQuery}`;
			await (vscode.env.openExternal(vscode.Uri.parse(searchUrl)))
		}
	};



	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('codewithease.search', searchError
		//{
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		/*vscode.window.showInformationMessage('Hello World from CodeWithEase!');
	}*/
	);

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
