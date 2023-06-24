// Создайте переменную sentence и присвойте ей строковое значение
// предложения. Напишите программу, которая преобразует первую букву каждого
// слова в предложении в верхний регистр. Например, для предложения "hello
// world" результатом должна быть строка "Hello World".
const sentence = "hello world";
const newSentence = sentence.trim().split(" ");
let res15 = "";
for (let i = 0; i < newSentence.length; i++) {
    res15 += newSentence[i][0].toUpperCase() + newSentence[i].slice(1) + " ";
}
console.log(res15);
