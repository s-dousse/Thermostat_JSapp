class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minimum_possible_temperature = 10;
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
    if (this.temperature <= this.minimum_possible_temperature) {
      return "sorry you can't go below 10";
    } else {
      this.temperature -= 1;
    }
  }

  setPowerSavingMode(value) {
    this.switch = value;
    if (this.switch) {
      this.maximum_possible_temperature = 25;
      return "PSM is now on, max temperature is 25";
    } else {
      this.maximum_possible_temperature = 32;
      return "PSM is now off, max temperature is no more 25";
    }
  }
}

// const thermostat = new Thermostat();
// console.log(thermostat.getTemperature());
// for (i = 0; i <= 9; i++) {
//   thermostat.down();
// }
// console.log(thermostat.minimum_possible_temperature);
// console.log(thermostat.getTemperature());
// console.log(thermostat.down());
// console.log(thermostat.getTemperature());

module.exports = Thermostat;
