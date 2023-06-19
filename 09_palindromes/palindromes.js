const palindromes = function (str) {
    var cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    var reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  };
  
  module.exports = palindromes;
  