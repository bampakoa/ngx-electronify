<h1 align="center">Welcome to ngx-electronyzer 👋</h1>

> Angular library that provides integration of the Electron API into an Angular application

The library was built as a replacement of [ngx-electron](https://github.com/ThorstenHans/ngx-electron), which is not currently under development. 

### 🏠 [Homepage](https://github.com/bampakoa/ngx-electronify/packages/core/projects/electron)

## Install

```sh
npm install ngx-electronyzer
```

## Usage

The library consists of an Angular service that acts as a wrapper over the Electron API. You can use Angular dependency injection to import the service:

``` typescript
import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electronyzer';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(private electronService: ElectronService) { }
}
```
The service is currently exposing the following capabilities:

  * `desktopCapturer` - Electron Desktop capturing API
  * `ipcRenderer` - Electron IpcRenderer
  * `webFrame` - Electron WebFrame
  * `clipboard` - Electron Clipboard
  * `crashReporter` - Electron CrashReporter
  * `shell` - Electron Shell API
  * `nativeImage` - Electron NativeImage API
  * `isElectronApp` - Indicates if app is being executed as a desktop one
  * `isMacOS` - Indicates if app is running on `macOS`
  * `isWindows` - Indicates if app is running on `Windows`
  * `isLinux` - Indicates if app is running on `Linux`
  * `isX86` - Indicates if app is running on `x86` architecture
  * `isX64` - Indicates if app is running on `x64` architecture
  * `isArm` - Indicates it app is running on `ARM` architecture

>Notice that all the above properties work normally, if you run the Angular application in the browser. However, their values will not be correct. So, make sure that you use the `isElectronApp` properly in your application.

**The `remote` module is not supported in this library because it is no longer available in Electron, as it was the case in ngx-electron. You can read more about the removal [here](https://www.electronjs.org/docs/latest/breaking-changes#removed-remote-module).**

## Author

👤 **Aristeidis Bampakos**

* Website: http://www.medium.com/@abampakos
* Twitter: [@abampakos](https://twitter.com/abampakos)
* Github: [@bampakoa](https://github.com/bampakoa)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/bampakoa/ngx-electronify/issues). 

## 🙏 Acknowledgements

Many thanks to [Thorsten Hans](https://github.com/ThorstenHans) for his great work and inspiration on the original integration with **ngx-electron**.

