const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    console.log('ready');

    console.log(app.getAppPath());
    console.log(app.getPath('home'));
    console.log(app.getPath('userData'));
    console.log(app.getPath('temp'));
    
    new BrowserWindow();
});

app.on('window-all-closed', () => {
    console.log('window-all-closed');
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('before-quit', (event) => {
    console.log('before-quit');
    // event.preventDefault();
});

app.on('will-quit', (event) => {
    console.log('will-quit');
    // event.preventDefault();
});

app.on('quit', () => {
    console.log('quit');
});

app.on('activate', (event, hasVisibleWindows) => {
    console.log('activate', hasVisibleWindows);
});

// 'https://github.com/2woongjae/codelab-1001'