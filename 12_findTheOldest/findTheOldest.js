const findTheOldest = function(array) {
    const currentYear = (new Date()).getFullYear();
    sorted = array.sort((a, b) => {
        if(!a.yearOfDeath){
            a.yearOfDeath = currentYear;
        }
        if(!b.yearOfDeath){
            b.yearOfDeath = currentYear;
        }
        ageA = a.yearOfDeath - a.yearOfBirth;
        ageB = b.yearOfDeath - b.yearOfBirth;
        if(ageA < ageB){
            return 1;
        } else {
            return -1;
        }
    });
    return sorted[0]

};

// Do not edit below this line
module.exports = findTheOldest;
