// Создайте массив чисел и определите, является ли он строго возрастающей
// последовательностью.
const arrNum16 = [3, 5, 8, 15, 35];
let temp = [arrNum16[0]];
for (let i = 1; i < arrNum16.length; i++) {
    if (arrNum16[i] > temp[temp.length - 1]) {
        temp.push(arrNum16[i]);
    }
    else {
        console.log(`массив ${arrNum16} не является строго возрастающей последовательностью`);
        break;
    }
}
if (temp.length === arrNum16.length)
    console.log(`массив ${temp} является строго возрастающей последовательностью`);
