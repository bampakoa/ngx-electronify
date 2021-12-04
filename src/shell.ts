import { app, BrowserWindow, shell } from 'electron';
import installExtension from 'electron-devtools-installer';
const ANGULAR_DEVTOOLS = 'ienfalfjdbdpebioblfackkekamfmbnh';

const params = process.argv.slice(2);
const appUrl = `http://localhost:${params[0]}/`;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false
  });

  mainWindow.loadURL(appUrl);

  mainWindow.once('ready-to-show', () => mainWindow.show());
}

async function installAngularDevtools() {
  try {
    const name = await installExtension(ANGULAR_DEVTOOLS);
    console.log(`Added Extension:  ${name}`);
  } catch (err) {
    console.log('An error occurred when downloading the extension: ', err);
  }
}

app.whenReady().then(async () => {
  await installAngularDevtools();
  createWindow();
});

app.on('web-contents-created', (_, contents) => {
  // Angular router is ignored on `will-navigate` event
  contents.on('will-navigate', (event, url) => {
    // allow hot reload to work properly
    if (url !== appUrl) {
      event.preventDefault();
    }
  });

  contents.setWindowOpenHandler(({ url }) => {
    // open all blank href links using the OS default browser
    setImmediate(() => {
      shell.openExternal(url);
    });
    return { action: 'deny' };
  });
});
