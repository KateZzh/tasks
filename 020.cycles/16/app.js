// Дано число 7, найдите все числа кратные 7 до 100

// for (let i = 7; i <= 100; i++) {
//   if (i % 7 == 0) {
//     console.log(i);
//   }
// }

// let i = 7;
// while (i <= 100) {
//   if (i % 7 == 0) {
//     console.log(i);
//   }
//   i++;
// }

let i = 7;
do {
  if (i % 7 == 0) {
    console.log(i);
  }
  i++;
} while (i <= 100);
