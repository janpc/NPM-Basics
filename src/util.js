const lodash = require("lodash");

/**
 * TODO: all getters, all get method must return a value
 * */

function createArray(arraySize) {
  return lodash.times(arraySize, lodash.uniqueId.bind(null, "ball_"));
}

function toCamelCase(string) {

  return lodash.camelCase(string);
  /* var arr = string.split(" ");
  let result = '';
  arr.forEach((element, index) => {
    let word = stringToLowerCase(element);
    if (index!=0) {
      word = capitalizeFirstLetter(word);
    }
    result += word;
  });

  return result;

  function stringToLowerCase(string){
    let result ='';
    for(let i=0; i<string.length; i++){
      result+=string.charAt(i).toLowerCase();
    }
    return result;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } */
}

function getIndexOf(array, value) {
  return lodash.indexOf(array, value);
}

module.exports = {
  createArray: createArray,
  toCamelCase: toCamelCase,
  getIndexOf: getIndexOf,
};
