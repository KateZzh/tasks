// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. 
// The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// const XO = (str) => {
//   const newStr = str.toLowerCase();
//   let countX = 0;
//   let countO = 0;

//   for (let i = 0; i < newStr.length; i++) {
//     if (newStr[i] === 'x') countX++;
//     if (newStr[i] === 'o') countO++;
//   }

//   return countX === countO;
// }

const XO = (str) => {
  const newStr = str.toLowerCase().split('');

  return newStr.filter((el) => el === 'x').length === newStr.filter((el) => el === 'o').length;
}

console.log(XO("xooxx"));
console.log(XO("xooax"));