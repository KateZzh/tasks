// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]


// const towerBuilder = (nFloors) => {
//   let floor = 0;
//   const arr = [];

//   while (floor < nFloors) {
//     let space = '';
//     let star = '';

//     for (let i = 1; i < nFloors - floor; i++) {
//       space += ' ';
//     }

//     for (let i = 0; i < floor * 2 + 1; i++) {
//       star += '*';
//     }

//     arr.push(space + star + space);

//     floor++;
//   }

//   return arr;
// }

const towerBuilder = (nFloors) =>
  [...Array(nFloors)].map((_, i) => ' '.repeat(nFloors - i - 1) + '*'.repeat(1 + i * 2) + ' '.repeat(nFloors - i - 1));

console.log(towerBuilder(7));