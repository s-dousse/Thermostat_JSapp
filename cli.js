const Thermostat = require("./thermostat");
const readline = require("readline");

const thermostat = new Thermostat();

//documentation used: https://nodejs.org/api/readline.html#rlquestionquery-options-callback
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Enter command > ",
});

rl.prompt();

rl.on("line", (line) => {
  if (line.trimEnd() == "up") {
    thermostat.up();
    console.log(`Temperature is ${thermostat.getTemperature()}`);
  } else if (line.trimEnd() == "down") {
    thermostat.down();
    console.log(`Temperature is ${thermostat.getTemperature()}`);
  }
  rl.prompt();
});
