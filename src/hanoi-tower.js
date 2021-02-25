const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  
  let calculateTurns, calculateSeconds;

  calculateTurns = Math.pow(2, disksNumber) - 1;
  calculateSeconds = Math.floor(calculateTurns / (turnsSpeed / 3600));

  
  return answer = {
    turns: calculateTurns,
    seconds: calculateSeconds
  };
};
