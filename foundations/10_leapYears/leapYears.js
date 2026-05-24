const leapYears = function(year) {
    if (year % 4 === 0 || year % 400 === 0 ) {
        return "Leap Year " + true
    }else {
        return "Is not a Leap Year " + false
    }
}
console.log(leapYears(1985))
// Do not edit below this line
module.exports = leapYears;
