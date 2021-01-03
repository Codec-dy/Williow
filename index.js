const {app, BrowserWindow} = require('electron')
const path = require('path')

// Enable live reload for Electron too
require('electron-reload')(__dirname, {
    // Note that the path to electron may vary according to the main file
    electron: require(`${__dirname}/node_modules/electron`)
});

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 800,
//    maxWidth:1280,
//    maxHeight:1024,
//    transparent: false,
    frame: true,
      show: false,
//      backgroundColor: '#20b2aa',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    },
    enableRemoteModule: true
  })
  

     // waits for program to load visual before showing
   mainWindow.once('ready-to-show', () =>{
       mainWindow.show();
   })
  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
   mainWindow.webContents.openDevTools()

}

//disable default window menu globally
app.on('browser-window-created',function(event,window) {
  window.setMenu(null);
})
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
// You can use console.log(notification); to see more available properties

const WindowsToaster = require('node-notifier').WindowsToaster;
 
var notifier = new WindowsToaster({
    withFallback: false, // Fallback to Growl or Balloons? 
    customPath: void 0 // Relative path if you want to use your fork of toast.exe 
});
 
notifier.notify({
    title: "Willows",
    message: "Willows Educational Complex || Welcome Admin",
    icon: "c:/path/image1.png", // Absolute path to Icon 
    sound: true, // true | false. 
    wait: true, // Wait for User Action against Notification 
}, function(error, response) {
    console.log(response);
});

