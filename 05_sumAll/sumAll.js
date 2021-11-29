const sumAll = function(num1, num2) {
    let higher;
    let lower;
    if(typeof(num1) == "number" && typeof(num2) == "number" && num1 >=0 && num2 >= 0){
        let total = 0;
        if(num1 > num2){
            higher = num1;
            lower = num2;
        } else {
            higher = num2;
            lower = num1;
        }

        for(let i = lower; i <= higher; i++){
            total += i;
        }
        
        return total;
    } else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = sumAll;
