// На входе статичный объект. Необходимо посчитать количество пар (ключ:
// значение) где значение число и вывести количество

const obj = {
  num1: 1,
  num2: 2,
  num3: 3,
  num4: 4,
  num5: 5,
  text1: "abc",
  text2: "ddd",
};

let count = 0;

for (let key in obj) {
  if (!isNaN(obj[key])) {
    count++;
  }
}

console.log(count);
