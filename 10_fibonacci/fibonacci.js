const fibonacci = function(a) {
    let cur = 0;
    let prev = 1;
    let next;
    for(let i = 0; i < a; i++){
        next = cur + prev;
        cur = prev;
        prev = next;
    }
    if(a >= 0){
        return cur;
    } else {
        return "OOPS";
    }

};

// Do not edit below this line
module.exports = fibonacci;
