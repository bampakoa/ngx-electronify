import { app, BrowserWindow, shell } from 'electron';
import installExtension from 'electron-devtools-installer';
const ANGULAR_DEVTOOLS = 'ienfalfjdbdpebioblfackkekamfmbnh';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false
  });

  const params = process.argv.slice(2);
  mainWindow.loadURL('http://localhost:' + params[0]);

  mainWindow.once('ready-to-show', () => mainWindow.show());
}

app.whenReady().then(async () => {
  const name = await installExtension(ANGULAR_DEVTOOLS)
  if (!!name) {
    console.log('An error occurred when downloading the extension: ', name);
  }
  console.log(`Added Extension:  ${name}`)
  createWindow();
});

app.on('web-contents-created', (_, contents) => {
  // Angular router is ignored on `will-navigate` event
  contents.on('will-navigate', event => {
    event.preventDefault();
  });

  contents.setWindowOpenHandler(({ url }) => {
    // open all blank href links using the OS default browser
    setImmediate(() => {
      shell.openExternal(url);
    });
    return { action: 'deny' };
  });
});
