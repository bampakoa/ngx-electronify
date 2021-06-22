import { app, BrowserWindow } from 'electron';
import installExtension from 'electron-devtools-installer';
const ANGULAR_DEVTOOLS = 'ienfalfjdbdpebioblfackkekamfmbnh';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  const params = process.argv.slice(2);
  mainWindow.loadURL('http://localhost:' + params[0]);
}

app.whenReady().then(() => {
  installExtension(ANGULAR_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
}).then(() => {
  createWindow();
});
