const child_process = require("child_process");

function runScript(command, args, callback) {
  const child = child_process.spawn(command, args, {
    encoding: "utf8",
    shell: true,
  });

  child.on("error", (error) => {
    console.log(error);
  });

  child.stdout.on("data", (data) => {
    data = data.toString();
    console.log(data);
  });

  child.stderr.on("data", (data) => {
    console.log(data);
  });

  if (typeof callback === "function") callback();
}

function handleStartRedis() {
  runScript("brew services start redis");
}

function handleStopRedis() {
  runScript("brew services stop redis");
}

module.exports = { handleStartRedis, handleStopRedis };
