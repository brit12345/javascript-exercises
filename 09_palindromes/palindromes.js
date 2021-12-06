const palindromes = function (string) {
  val = string.toLowerCase().replace(/[^A-Za-z]/g, "");
  back = val.split('').reverse().join('');
  return val == back;
};

// Do not edit below this line
module.exports = palindromes;
