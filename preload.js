const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  startRedis: () => ipcRenderer.send("start-redis"),
  stopRedis: () => ipcRenderer.send("stop-redis"),
});
