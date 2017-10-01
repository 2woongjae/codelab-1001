const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

const HTML = url.format({
    protocol: 'file',
    pathname: path.join(__dirname, 'index.html')
});

app.on('ready', () => {
    console.log('ready');

    const second = new BrowserWindow({
        show: false,
        frame: false,
    });
    second.once('ready-to-show', () => {
        second.show();
    });
    second.loadURL(HTML);
    second.on('focus', () => {
        console.log('focus');
    });
    second.on('blur', () => {
        console.log('blur');
    });
    second.on('move', () => {
        console.log('move');
    });

    console.log(BrowserWindow.getAllWindows());
    console.log(BrowserWindow.getFocusedWindow());
    
    /*
    const win = new BrowserWindow({
        x: 0,
        y: 0,
        width: 500,
        minWidth: 300,
        maxWidth: 700,
        height: 500,
        minHeight: 500,
        maxHeight: 500,
        movable: true,
        show: false,
        maximizable: false,
        minimizable: false,
        parent: second,
        modal: true
    });
    win.loadURL('https://github.com');
    win.webContents.openDevTools();
    win.once('ready-to-show', () => {
        win.show();
    });
    */
});