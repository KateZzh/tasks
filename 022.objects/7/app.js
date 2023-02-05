// На вход статичный объект. Необходимо объект проверить на пустоту. Если же
// объект пустой, то выводим false, если же содержит хотя бы одну пару (ключ:
// значение), то true

const obj = {
  name: "",
  age: 12,
};
let count = 0;

for (let key in obj) {
  if (key) {
    count++;
  }
}

if (count === 0) {
  console.log(false);
} else console.log(true);
