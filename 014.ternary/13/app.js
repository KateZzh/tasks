// Пользователь вводит четырехзначное число. Напишите скрипт, который будет
// выявлять является ли каждое составляющее числа четным либо нечетным.
// Добавить проверку на ввод только чисел
// 1234 -> 1 – неч 2 – чет 3 – неч 4 – чет

let number = prompt("введите четырехзначное число");
let firstN = number.slice(0, 1);
let secondN = number.slice(1, 2);
let thirdN = number.slice(2, 3);
let fourthN = number.slice(3, 4);

if (isNaN(number)) {
  console.log("ошибка");
} else {
  if (firstN % 2 === 0) {
    console.log(`${firstN} - чет`);
  } else {
    console.log(`${firstN} - неч`);
  }

  if (secondN % 2 === 0) {
    console.log(`${secondN} - чет`);
  } else {
    console.log(`${secondN} - неч`);
  }

  if (thirdN % 2 === 0) {
    console.log(`${thirdN} - чет`);
  } else {
    console.log(`${thirdN} - неч`);
  }

  if (fourthN % 2 === 0) {
    console.log(`${fourthN} - чет`);
  } else {
    console.log(`${fourthN} - неч`);
  }
}


