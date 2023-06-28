// Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.
const str14 = "HeLlo world!".toLowerCase().trim();
let obj14 = {};
for (let i = 0; i < str14.length; i++) {
    obj14[str14[i]] ? obj14[str14[i]]++ : obj14[str14[i]] = 1;
}
const arr14 = Object.values(obj14);
const maxArr14 = Math.max(...arr14);
for (let key in obj14) {
    if (obj14[key] === maxArr14)
        console.log(`символ: ${key}, количество: ${obj14[key]}`);
}
