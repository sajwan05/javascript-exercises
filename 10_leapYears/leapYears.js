const leapYears = function(year) {
    // if (year % 4 === 0 && !(year % 100 === 0) ){
    //     return true;
    // }else if (year % 100 === 0 && year % 400 === 0 ){
    //     return true;
    // }else {
    //     return false;
    // }

    let divisibleByFour = year % 4 === 0;
    let divisibleByHundred = year % 100 === 0;
    let divisibleByFourHundred = year % 400 === 0;

    if (divisibleByFour && !divisibleByHundred || divisibleByFourHundred){
        return true;
    }else {
        return false;
    }
 }

// Do not edit below this line
module.exports = leapYears;
