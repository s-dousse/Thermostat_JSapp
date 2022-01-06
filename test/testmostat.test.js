const Thermostat = require("../thermostat");

describe("Thermostat", () => {
  const thermostat = new Thermostat();
  const thermostat2 = new Thermostat();

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

  it("has minimum possible temperature is 10", () => {
    for (i = 0; i <= 10; i++) {
      thermostat.down();
    }
    // console.log(thermostat.getTemperature()); // temperature = 10
    expect(thermostat.down()).toMatch("sorry you can't go below 10");
  });

  it("has a Power saving mode that is switched on by default", () => {
    expect(thermostat2.switch).toEqual(true);
  });

  it("when Power saving mode is on, max temperature is 25", () => {
    expect(thermostat2.setPowerSavingMode(true)).toMatch(
      "PSM is now on, max temperature is 25"
    );
  });

  it("has maximum possible temperature 25 (PSM on)", () => {
    for (i = 0; i <= 4; i++) {
      thermostat2.up();
    }
    // console.log(thermostat2.up()); // temperature = 25
    expect(thermostat2.up()).toMatch("25 (max reached)");
  });

  it("when Power saving mode is off, max temperature is no more 25", () => {
    expect(thermostat2.setPowerSavingMode(false)).toMatch(
      "PSM is now off, max temperature is no more 25"
    );
  });

  it("has maximum possible temperature 32 (PSM off)", () => {
    for (i = 0; i <= 6; i++) {
      thermostat2.up();
    }
    // console.log(thermostat2.up()); // temperature = 32
    expect(thermostat2.up()).toMatch("32 (max reached)");
  });
});
