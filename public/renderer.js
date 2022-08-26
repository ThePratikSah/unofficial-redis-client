const startBtn = document.getElementById("btn-start");
const stopBtn = document.getElementById("btn-stop");

startBtn.addEventListener("click", () => {
  window.electronAPI.startRedis();
});

stopBtn.addEventListener("click", () => {
  window.electronAPI.stopRedis();
});
