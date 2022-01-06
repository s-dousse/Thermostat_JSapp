# Building a Thermostat

## Objectives

- Test-drive a simple JS application.

## Domain model

You'll build, test-driving your code, a simple program to manage a thermostat. Here is the specification for the initial MVP of the program:

- [x] The Thermostat starts with an initial temperature of 20 degrees
- [ ] You can increase the temperature with an `up` method
- [ ] You can decrease the temperature with a `down` method
- [ ] The _minimum possible temperature_ is 10 degrees
- [ ] he _Power saving mode_ is _on by default_ but it can also be turned off
- [ ] _If power saving mode is on_, the maximum temperature is 25 degrees
- [ ] _If power saving mode is off_, the maximum temperature is 32 degrees
- [ ] You can reset the temperature to 20 with a `reset` method
- [ ] You can ask about the thermostat's _current energy usage_: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.

You'll know if your class Thermostat is correctly implemented if you can run the following code. Your tests should also reflect the same requirements.

```javascript
const thermostat = new Thermostat();

thermostat.getTemperature(); // should return 20

thermostat.up();
thermostat.up();
thermostat.getTemperature(); // should now return 22

thermostat.down();
thermostat.getTemperature(); // should now return 21

thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25

for (let i = 0; i < 10; i++) {
  thermostat.up();
}

thermostat.getTemperature(); // should be 25 (max reached)

thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is no more 25

thermostat.up();
thermostat.getTemperature(); // should now return 26

thermostat.reset();
thermostat.getTemperature(); // should be back to 20
```

Test-drive, one step at a time, each of those steps. If you're having trouble with this exercise, go back a few sections and review what you've previously learned in it. Think about how to write a test for a class in JS. Then, think about how to write this class in its own file (probably named thermostat.js), and what methods should be implemented.
