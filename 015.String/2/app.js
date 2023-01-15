// Преобразовать строку ‘Full StaCK DevELoper’ в массив вида [‘full, ‘stack’, ‘developer’]

const str = "  Full StaCK DevELoper".trim().toLowerCase().split(" ");

console.log(isNaN(str) ? console.log(str) : console.log("error"));
