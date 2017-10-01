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

    Menu.setApplicationMenu(getApplicationMenu());
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
        win.loadURL(HTML);
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
        },
        {
            label: '수업이니깐',
            submenu: [
                {
                    label: '추석'
                },
                {
                    type: 'checkbox',
                    label: '체크박스',
                    checked: true,
                    click: (event) => {
                        console.log(event.checked);
                    }
                }
            ]
        }
    ]);
}

function getApplicationMenu() {
    return Menu.buildFromTemplate([
        {
            label: 'First',
            submenu: [
                {
                    label: 'First1'
                },
                {
                    label: 'First2'
                }
            ]
        },
        {
            label: 'Second',
            submenu: [
                {
                    label: 'Second1'
                },
                {
                    label: 'Second2'
                }
            ]
        },
        {
            label: 'Roles',
            submenu: [
                {role: 'paste'},
                {role: 'reload'},
                {role: 'about'},
                {role: 'toggledevtools'}
            ]
        }
    ]);
}