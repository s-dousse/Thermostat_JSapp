const Thermostat = require("../thermostat");

describe("Thermostat", () => {
  const thermostat = new Thermostat();

  it("returns 20 as an intial temperature", () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  it("temperature can be increased", () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });

  it("temperature can be decreased", () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);
  });
});
