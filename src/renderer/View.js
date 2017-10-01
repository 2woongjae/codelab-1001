const {ipcRenderer, remote, shell} = require('electron');

class View {
    constructor() {
        this._btnSend = document.querySelector('#btn-send');
        this._btnSendSync = document.querySelector('#btn-send-sync');
        this._btnRemote = document.querySelector('#btn-remote');
        
        this._bindDomEvent();
        this._bindIpcEvent();
    }

    _bindDomEvent() {
        this._btnSend.addEventListener('click', this._btnSendClick.bind(this));
        this._btnSendSync.addEventListener('click', this._btnSendSyncClick.bind(this));
        this._btnRemote.addEventListener('click', this._btnRemoteClick.bind(this));
    }

    _btnSendClick() {
        console.error('비동기로 메세지 보내기');
        ipcRenderer.send('a', {name: 'Mark'});
    }

    _btnSendSyncClick() {
        console.error('동기로 메세지 보내기');
        const result = ipcRenderer.sendSync('c', '바로 내놔');
        console.error(result);
    }

    _btnRemoteClick() {
        console.error('리모트 사용하기');
        const {dialog, BrowserWindow} = remote;
        // dialog.showErrorBox('경고', '미스테리');
        // remote.getCurrentWindow().hide();
        // remote.getCurrentWebContents().openDevTools();
        // remote.getCurrentWindow().on('', () => {});
        // shell.openExternal('https://github.com');
        // shell.openItem();
        console.log(process.versions);
        console.log(process.platform);
        console.log(process.type);        
    }

    _bindIpcEvent() {
        ipcRenderer.on('b', (event, arg) => {
            console.error(arg, '잘 받았음');
        });
    }
}

module.exports = {
    View
};