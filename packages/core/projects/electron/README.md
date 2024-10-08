> Angular library that provides integration of the Electron API into an Angular application

The library was built as a replacement of [ngx-electron](https://github.com/ThorstenHans/ngx-electron), which is not currently under development. 

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

**The `remote` module is not supported in this library because it is no longer available in Electron, as it was the case in ngx-electron. You can read more about the removal [here](https://www.electronjs.org/docs/latest/breaking-changes#removed-remote-module).**

## 🙏 Acknowledgements

Many thanks to [Thorsten Hans](https://github.com/ThorstenHans) for his great work and inspiration on the original integration with **ngx-electron**.
