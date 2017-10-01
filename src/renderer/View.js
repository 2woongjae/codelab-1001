const {ipcRenderer} = require('electron');

class View {
    constructor() {
        this._btnSend = document.querySelector('#btn-send');
        this._btnSendSync = document.querySelector('#btn-send-sync');
        
        this._bindDomEvent();
        this._bindIpcEvent();
    }

    _bindDomEvent() {
        this._btnSend.addEventListener('click', this._btnSendClick.bind(this));
        this._btnSendSync.addEventListener('click', this._btnSendSyncClick.bind(this));
    }

    _btnSendClick() {
        console.error('비동기로 메세지 보내기');
        ipcRenderer.send('a', {name: 'Mark'});
    }

    _btnSendSyncClick() {
        console.error('동기로 메세지 보내기');
        // ipcRenderer.send('a', {name: 'Mark'});
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