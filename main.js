const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

//When the application starts, it sets the default window size and also loads the start window
app.on('ready', function(){
    mainWindow = new BrowserWindow({});
    mainWindow.setSize(1200, 900, true);
    mainWindow.setMinimumSize(1000,850);

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'canvasWindow.html'), //this will change to a login in the future
        protocol:'file:',
        slashes: true
    }));
});