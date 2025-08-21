import { inject, Injectable } from '@angular/core';
import { ElectronAPI } from './renderer';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  private _electron: ElectronAPI =
    inject(DOCUMENT).defaultView?.require?.('electron');

  constructor() {
    if (!this.isElectronApp) {
      console.warn(
        'Electron API is unavailable! Please check that your application is not running in the browser and node integration is enabled.'
      );
    }
  }

  get isElectronApp(): boolean {
    return !!this._electron;
  }

  get isMacOS(): boolean {
    return this._electron?.platform === 'darwin';
  }

  get isWindows(): boolean {
    return this._electron?.platform === 'win32';
  }

  get isLinux(): boolean {
    return this._electron?.platform === 'linux';
  }

  get isX86(): boolean {
    return this._electron?.arch === 'ia32';
  }

  get isX64(): boolean {
    return this._electron?.arch === 'x64';
  }

  get isArm(): boolean {
    return this._electron?.arch === 'arm';
  }

  get desktopCapturer(): Electron.DesktopCapturer {
    return this._electron?.desktopCapturer;
  }

  get ipcRenderer(): Electron.IpcRenderer {
    return this._electron?.ipcRenderer;
  }

  get webFrame(): Electron.WebFrame {
    return this._electron?.webFrame;
  }

  get clipboard(): Electron.Clipboard {
    return this._electron?.clipboard;
  }

  get crashReporter(): Electron.CrashReporter {
    return this._electron?.crashReporter;
  }

  get nativeImage(): typeof Electron.nativeImage {
    return this._electron?.nativeImage;
  }

  get shell(): Electron.Shell {
    return this._electron?.shell;
  }
}
