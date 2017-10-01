const {app, BrowserWindow, Tray, Menu} = require('electron');
const url = require('url');
const path = require('path');

const HTML = url.format({
    protocol: 'file',
    pathname: path.join(__dirname, 'index.html')
});

let win = null;

app.on('ready', () => {
    console.log('ready');

    const tray = new Tray(path.join(__dirname, 'icon.png'));
    tray.setContextMenu(getTrayMenu());
    /*
    tray.on('click', () => {
        createWindow();
    });
    tray.on('right-click', () => {
        win.hide();
    });
    */
});

app.on('window-all-closed', () => {});

function createWindow() {
    if (win === null) {
        win = new BrowserWindow({
            show: false
        });
        win.on('closed', () => {
            win = null;
        });
    }
    win.show();
}

function getTrayMenu() {
    const menu = new Menu();
    return Menu.buildFromTemplate([
        {
            type: 'normal',
            label: 'Open',
            click: () => {
                createWindow();
            }
        },
        {
            type: 'separator'
        },
        {
            label: 'Quit',
            click: () => {
                app.quit();
            }
        }
    ]);
}