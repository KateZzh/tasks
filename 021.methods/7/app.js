// На входе задан массив [‘hschool’, ‘hschool_0’, ‘hschool_1’]. Напишите все возможные
// способы обращения к первому и последнему элементам

const arr = ["hschool", "hschool_0", "hschool_1"];

console.log(arr[0], arr[2]);
console.log(arr[arr.length - 3], arr[arr.length - 1]);
console.log(arr.indexOf("hschool"), arr.lastIndexOf("hschool_1"));
console.log(arr.slice(0, 1), arr.slice(2));
