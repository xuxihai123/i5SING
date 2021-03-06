/**
 * Created by zhaofeng on 21/07/2016.
 */
const {BrowserWindow}  = require('electron');

class AboutWindow {
    constructor(parent) {
        this.win = new BrowserWindow({
            frame: false,
            resizable: false,
            height: 250,
            width: 300,
            center: true,
            alwaysOnTop: true,
            parent: parent
        });

        this.win.loadURL(`file://${__dirname}/../views/about.html`);
        // this.win.webContents.openDevTools();

        return this.win;
    }
}

module.exports = AboutWindow;