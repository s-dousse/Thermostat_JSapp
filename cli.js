const Thermostat = require("./thermostat");
const readline = require("readline");

const thermostat = new Thermostat();

//documentation used: https://nodejs.org/api/readline.html#rlquestionquery-options-callback
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ThermostatCLI = () => {
  rl.question("Enter command > ", (line) => {
    switch (line.trimEnd()) {
      case "up":
        console.log(thermostat.up());
        break;
      case "down":
        console.log(thermostat.down());
        break;
      case "psm on":
        thermostat.setPowerSavingMode(true);
        break;
      case "psm off":
        thermostat.setPowerSavingMode(false);
        break;
      case "reset":
        thermostat.reset();
        break;
      case "exit":
    }
    ThermostatCLI(); // recursive solution
  });
  // ThermostatCLI(); // INFINITE LOOP : "Enter command > " FLIKERING !!!


ThermostatCLI();
