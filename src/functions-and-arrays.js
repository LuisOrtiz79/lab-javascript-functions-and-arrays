// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {{
  if(num1 > num2){
    return num1;
  }else {
    return num2;
  }
}}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(list) {
  let temp = "";
  console.log(list);
  if(list.length === 0){
    return null;
  }else if(list.length === 1){
    temp = list[0];
    return temp;
  }else{
    for (let i = 0; i < list.length; i++) {
      if(list[i].length > temp.length) {
        temp = list[i];
      }else if(list[i].length === temp.length){
        continue;
      }else{
        continue;
      }
    }
  }
  return temp;
}

findLongestWord(words);


// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(sumNum) {
  let count = 0;
  if(sumNum.length === 0){
    return 0;
  }else if(sumNum.length === 1){
    count += sumNum[0];
    return count;
  }else{
    for(let i = 0; i < sumNum.length; i++){
      count += sumNum[i];
    }
  }
  return count;
}

sumNumbers(numbers);

// Iteration #3.1 Bonus:
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(arrList) {
  let count = 0;
  for(let i = 0; i < arrList.length; i++){
    if(typeof arrList[i] === "number"){
      count += arrList[i];
    }else if(typeof arrList[i] === "string"){
      count += arrList[i].length;
    }else if(typeof arrList[i] === "boolean"){
      if(arrList[i] === true){
        count += 1;
      }else{
        continue;
      }
    }else{
      throw new Error("Error message goes here");
    }
  }
  return count;
}

sum(mixedArr);

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(avgNum) {
  let count = 0;
  if(avgNum.length === 0){
    return null;
  }else if(avgNum.length === 1){
    count += avgNum[0];
    return count;
  }else{
    for(let i = 0; i < avgNum.length; i++){
      count += avgNum[i];
    }
  }
  return count / avgNum.length;
}

averageNumbers(numbersAvg);

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arrLength) {
  let count = 0;
  if(arrLength.length === 0){
    return null;
  }else if(arrLength.length === 1){
    count += arrLength[0].length;
    return count;
  }else{
    for(let i = 0; i < arrLength.length; i++){
      count += arrLength[i].length;
    }
  }
  return count / arrLength.length;
}

averageWordLength(wordsArr);

// Bonus - Iteration #4.1
const mixedArr1 = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function avg(arrList) {
  let count = 0;
  if(arrList.length === 0){
    return null;
  }else{
    for(let i = 0; i < arrList.length; i++){
      if(typeof arrList[i] === "number"){
        count += arrList[i];
      }else if(typeof arrList[i] === "string"){
        count += arrList[i].length;
      }else if(typeof arrList[i] === "boolean"){
        if(arrList[i] === true){
          count += 1;
        }else{
          continue;
        }
      }else{
        throw new Error("Error message goes here");
      }
    }
  }
  return count / arrList.length;
}

avg(mixedArr1);

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(uniqueList) {
  let uniqueArr = [];
  if(uniqueList.length === 0){
    return null;
  }else {
    for(let i = 0; i < uniqueList.length; i++){
      if(!uniqueArr.includes(uniqueList[i])){
        uniqueArr.push(uniqueList[i]);
      }
    }
  }
  return uniqueArr;
}

uniquifyArray(wordsUnique);

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordList, word) {
  if(wordList.length === 0){
    return null;
  }else if(wordList.length === 1){
    return true;
  }else{
    if(wordList.includes(word)){
      return true;
    }else {
      return false;
    }
  }
}

doesWordExist(wordsFind, 'truth');
doesWordExist(wordsFind, 'hello');



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(wordList, word) {
  let count = 0;
  if(wordList === 0){
    return 0;
  }else if(!wordList.includes(word)){
    return 0;
  }else {
    for(let i = 0; i < wordList.length; i++){
      if(wordList[i] === word){
        count++;
      }
    }
  }
  return count;
}

howManyTimes(wordsCount, 'matter');
howManyTimes(wordsCount, 'hello');


// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(arr) {

  let horizontalProduct = 0
  let verticalProduct = 0

  arr.forEach((element, i, arr) => {
    element.forEach((number, index, array) => {
    if (array[index + 3] !== undefined) {
      let thisProduct = array[index] * array[index + 1] * array[index + 2] * array[index + 3]
      if (thisProduct > horizontalProduct) {
        horizontalProduct = thisProduct
      }
    }   
    })
  })

  arr.forEach((element, i, arr) => {
    element.forEach((number, index, array) => {
      if (arr[i + 3] !== undefined) {
      let thisProduct = arr[i][index] * arr[i + 1][index] * arr[i + 2][index] * arr[i + 3][index] 
       if (thisProduct > verticalProduct) {
         verticalProduct = thisProduct
       }   
      } 
    })
  })

  return horizontalProduct > verticalProduct ? horizontalProduct : verticalProduct 
}

greatestProduct(matrix);




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
