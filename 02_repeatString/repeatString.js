const repeatString = function(input, amt) {
    let result = "";
    for(let i = 0; i < amt; i++){
        result += input;
    }

    if(amt >= 0){
        return result;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
