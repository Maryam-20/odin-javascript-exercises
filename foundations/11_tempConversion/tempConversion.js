const convertToCelsius = function(farenheit) {
  const farenheit_2_celcius = Math.round((farenheit -32) * 5/9)
  console.log(farenheit_2_celcius)
}
convertToCelsius(92)


const convertToFahrenheit = function(celcius) {
  const celcius_2_farenheit = Math.round((celcius * 9/5) + 32)
  console.log(celcius_2_farenheit)
};
convertToFahrenheit(33.333)
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
