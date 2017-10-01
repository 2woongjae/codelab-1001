const {app, BrowserWindow, Tray} = require('electron');
const url = require('url');
const path = require('path');

const HTML = url.format({
    protocol: 'file',
    pathname: path.join(__dirname, 'index.html')
});

app.on('ready', () => {
    console.log('ready');

    new Tray(path.join(__dirname, 'icon.png'));

});