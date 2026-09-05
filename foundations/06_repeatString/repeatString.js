const repeatString = function(originalString, number) {
    let repeatedString = "";

    if(number < 0) return "ERROR";

    for(let i = 0; i < number; i++){
        repeatedString += originalString;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
