// 2. Create
// На входе объект вида
// { "label": "Test", "category": "test", "priority": 1 },
// Неоходимо запушить в БД объект только в том случае, если нет совпадений по
// label.
// Если совпадения нет, то в объект клиента добавить ключ id со значением label в
// toLowerCase таким образом, чтобы в БД был запушен объект вида
// {"id": "test" "label": "Test", "category": "test", "priority": 1 },
// Если совпадение есть – ошибка

const obj = {
  label: "Test1",
  category: "test",
  priority: 1,
};

let dataBase = {
  label: "Test",
  category: "test",
  priority: 1,
};

// if (obj.label === dataBase.label) {
//     console.log('есть совпадение по label');
// } else {
//     Object.assign(dataBase, obj);
// }

// console.log(dataBase);