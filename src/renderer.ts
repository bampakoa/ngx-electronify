import { app, BrowserWindow } from 'electron';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  const params = process.argv.slice(2);
  mainWindow.loadURL('http://localhost:' + params[0]);
}

app.whenReady().then(() => {
  createWindow();
});
