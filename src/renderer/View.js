class View {
    constructor() {
        this._btnSend = document.querySelector('#btn-send');

        this._bindDomEvent();
    }

    _bindDomEvent() {
        this._btnSend.addEventListener('click', this._btnSendClick.bind(this));
    }

    _btnSendClick() {
        console.error('비동기로 메세지 보내기');
    }
}

module.exports = {
    View
};