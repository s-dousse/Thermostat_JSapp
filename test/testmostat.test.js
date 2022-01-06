const Thermostat = require("../thermostat");

describe("Thermostat", () => {
  const thermostat = new Thermostat();

  it("returns 20 as an intial temperature", () => {
    expect(thermostat.getTemperature()).toBe(20);
  });
});
