<p align="center">
  <img src="https://github.com/bampakoa/ngx-electronify/blob/master/logo.png?raw=true" alt="Ngx-electronify" />
</p>

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/bampakoa/ngx-electronify)

<h1 align="center">Welcome to ngx-electronify 👋</h1>

> Angular CLI builder that runs your application in the desktop using Electron

The builder runs your Angular application in `serve` mode and loads it in an Electron window.

### 🏠 [Homepage](https://github.com/bampakoa/ngx-electronify)

## Install

```sh
ng add ngx-electronify
```
You can pass the following options:
* `--project`: the name of the project on which you want to install it. It is useful in multi-project workspaces such as Nx DevTools.

## Usage

```sh
ng run [project-name]:desktop
```
You can pass the following options either in the `angular.json` file or when running the builder from the terminal:

> Remember that options need to be typed in kebab-case format from the terminal!

* `workspaceConfig`: the configuration of the workspace. By default it uses the workspace default configuration.
* `devTools`: setting this to true will automatically open the Chrome developer tools. By default this is set to `false`.
* `allowIntegration`: setting this to true will enable Electron integration through the [ngx-electronyzer](https://www.npmjs.com/package/ngx-electronyzer) library. By default this is set to `false`.

 <img src="https://github.com/bampakoa/ngx-electronify/blob/master/demo.gif?raw=true" alt="Demo" />

## 🧩 Angular DevTools

You can run the official Angular DevTools extension to debug and profile your Angular application directly from the Electron window. Select the `View | Toggle Developer Tools` item from the main menu of your application and click on the **Angular** tab to get started 🚀.

## Author

👤 **Aristeidis Bampakos**

* Website: http://www.medium.com/@abampakos
* Twitter: [@abampakos](https://twitter.com/abampakos)
* Github: [@bampakoa](https://github.com/bampakoa)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/bampakoa/ngx-electronify/issues). 

## Show your support

Give a ⭐️ if this project helped you!
