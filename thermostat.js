class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minimum_possible_temperature = 10;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    this.temperature++;
  }

  down() {
    if (this.temperature <= this.minimum_possible_temperature) {
      return "sorry you can't go below 10";
    } else {
      this.temperature -= 1;
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
