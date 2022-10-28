/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let start = 0;
  let extraFuel = 0;
  let requiredFuel = 0;

  for (let i = 0; i < gas.length; i++) {
    extraFuel += gas[i] - cost[i];
    if (extraFuel < 0) {
      start = i + 1;
      requiredFuel += extraFuel;
      extraFuel = 0;
    }
  }

  if (extraFuel + requiredFuel >= 0) {
    return start;
  }
  return -1;
};
