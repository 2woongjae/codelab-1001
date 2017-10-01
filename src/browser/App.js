const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

const HTML = url.format({
    protocol: 'file',
    pathname: path.join(__dirname, '../../static/index.html')
});

class App {
    constructor() {
        this._win = null;
        app.on('ready', this._ready.bind(this));
    }

    _ready() {
        console.log('ready');

        this._win = new BrowserWindow({
            show: false
        });
        this._win.once('ready-to-show', () => {
            this._win.show();
        });
        this._win.loadURL(HTML);
    }
}

module.exports = {
    App
};