// const sumAll = function(start, end) {
//     let sum = 0;
//     if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)){
//         return "ERROR";
//     } 
//     else if (start > end) {
//         for (let j = end; j <= start; j++) {
//             sum += j;
//         }
//     }else{
//          for(let i = start; i <= end; i++) {
//         sum += i;
//     }
//     }
   

//     return sum;
// };


// Alternative Approach:

const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return `ERROR`;   
    if (min < 0 || max < 0) return `ERROR`;

    if (min > max) {
        let t = min;
        min = max;
        max = t;
    }

    let sum = 0;

    for (let i = min; i <= max; i++){
        sum += i;
    }

    return sum;
}

// Do not edit below this line
module.exports = sumAll;
