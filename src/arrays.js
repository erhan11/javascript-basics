const getNthElement = (index, array) => {
return array [index % array.length]};

const arrayToCSVString = array => {
return array.join()};

const csvStringToArray = string => {
return string.split(",")};

const addToArray = (element, array) => {
array.push(element)
};

const addToArray2 = (element, array) => {
  const oldArray = Array.from(array);
  oldArray.push(element);
  return oldArray;
};

const removeNthElement = (index, array) => {
array.splice(index, 1);
};

const numbersToStrings = numbers => {
return numbers.map(String)};

const uppercaseWordsInArray = strings => {
return strings.map(
  function (upper) {
    return upper.toUpperCase();
  }
)};

const reverseWordsInArray = strings => {
return strings.map(
  function (rev) {
    return rev.split("").reverse().join("");
  }
)};

const onlyEven = numbers => {
return numbers.filter(num => num % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const clonedArray = [...array];
clonedArray.splice(index, 1);
return clonedArray;
};

const elementsStartingWithAVowel = strings => {
return strings.filter(vow => /^[aeiou]/i.test(vow));
};

const removeSpaces = string => {
return string.replace(/\s/g, "");

};

const sumNumbers = numbers => {
return numbers.reduce((a, b) => a + b, 0)};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
