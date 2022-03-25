const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 850,
        height: 600
    })

    win.loadURL("http://localhost/")
}

app.whenReady().then(() => {
    createWindow()
})