const readline = require("readline");

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.min = 10;
    this.switch = true;
    this.max = 25;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    this.switch ? (this.max = 25) : (this.max = 32);

    if (this.temperature < this.max) {
      return this.temperature++;
    } else {
      return `${this.temperature} (max reached)`;
    }
  }

  down() {
    if (this.temperature <= this.min) {
      return "sorry you can't go below 10";
    } else {
      return (this.temperature -= 1);
    }
  }

  reset() {
    this.temperature = 20;
  }

  setPowerSavingMode(value) {
    this.switch = value;
    if (this.switch) {
      this.max = 25;
      return "PSM is now on, max temperature is 25";
    } else {
      this.max = 32;
      return "PSM is now off, max temperature is no more 25";
    }
  }

  getCurrentEnergyUsage() {
    if (this.temperature < 18) {
      return "low-usage";
    } else if (this.temperature <= 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
}

module.exports = Thermostat;
