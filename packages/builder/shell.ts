import { app, BrowserWindow, shell } from 'electron';
import installExtension from 'electron-devtools-installer';
import { join } from 'path';

const ANGULAR_DEVTOOLS = 'ienfalfjdbdpebioblfackkekamfmbnh';
const [port, devTools, allowIntegration] = process.argv.slice(2);
const appUrl = `http://localhost:${port}/`;

function createWindow() {
  const options: Electron.BrowserWindowConstructorOptions = {
    width: 800,
    height: 600,
    show: false,
    icon: join(__dirname, 'logo.ico')
  };

  // expose the Electron API into the global window object
  if (getBoolean(allowIntegration)) {
    options.webPreferences = {
      contextIsolation: false,
      nodeIntegration: true
    };
  }

  const mainWindow = new BrowserWindow(options);

  // load the URL of the Angular Live Development Server
  mainWindow.loadURL(appUrl);

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    if (getBoolean(devTools)) {
      mainWindow.webContents.openDevTools();
    }
  });
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

function getBoolean(value: string) {
  return value === 'true' ? true : false;
}
