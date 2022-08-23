export interface ElectronAPI {
  platform: string;
  arch: string;
  desktopCapturer: Electron.DesktopCapturer;
  ipcRenderer: Electron.IpcRenderer;
  webFrame: Electron.WebFrame;
  clipboard: Electron.Clipboard;
  crashReporter: Electron.CrashReporter;
  nativeImage: typeof Electron.nativeImage;
  shell: Electron.Shell;
}

declare global {
  interface Window {
    electron: ElectronAPI;
    require: any;
  }
}
