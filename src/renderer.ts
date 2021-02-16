import { app, BrowserWindow } from 'electron';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadURL('http://localhost:4200');
}

app.whenReady().then(() => {
  createWindow();
});
