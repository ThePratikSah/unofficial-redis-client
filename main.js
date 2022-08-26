const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { handleStartRedis, handleStopRedis } = require("./utils/helper");

function createWindow() {
  const mainWindow = new BrowserWindow({
    frame: false,
    width: 300,
    maxWidth: 300,
    height: 150,
    maxHeight: 150,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("index.html");

  ipcMain.on("start-redis", handleStartRedis);

  ipcMain.on("stop-redis", handleStopRedis);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
