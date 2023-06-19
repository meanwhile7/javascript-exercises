const convertToCelsius = function(f) {
  const cel = Math.round((f-32)*(5/9) * 10) / 10;
  return cel;
};

const convertToFahrenheit = function(c) {
  const fer =  Math.round(((c * 9)/5 + 32) * 10) / 10;
  return fer;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
