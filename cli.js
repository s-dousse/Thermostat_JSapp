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
  switch (line.trimEnd()) {
    case "up":
      console.log(thermostat.up());
      // console.log(`Temperature is ${thermostat.getTemperature()}`);
      break;
    case "down":
      console.log(thermostat.down());
      // console.log(`Temperature is ${thermostat.getTemperature()}`);
      break;
    case "psm on":
      thermostat.setPowerSavingMode(true);
      // console.log(`Temperature  is ${thermostat.getTemperature()}`);
      break;
    case "psm off":
      thermostat.setPowerSavingMode(false);
      // console.log(`Temperature is ${thermostat.getTemperature()}`);
      break;
    case "reset":
      thermostat.reset();
      // console.log(`Temperature is ${thermostat.getTemperature()}`);
      break;
  }
  rl.prompt();
});
