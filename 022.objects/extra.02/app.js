// 2. Create
// На входе объект вида
// { "label": "Test", "category": "test", "priority": 1 },
// Неоходимо запушить в БД объект только в том случае, если нет совпадений по
// label.
// Если совпадения нет, то в объект клиента добавить ключ id со значением label в
// toLowerCase таким образом, чтобы в БД был запушен объект вида
// {"id": "test" "label": "Test", "category": "test", "priority": 1 },
// Если совпадение есть – ошибка

let arrDataBase = [
  { id: "javascript", label: "JavaScript", category: "programmingLanguages", priority: 1 },
  { id: "typescript", label: "TypeScript", category: "programmingLanguages", priority: 1 },
  { id: "sql", label: "SQL", category: "programmingLanguages", priority: 2 },
  { id: "java", label: "Java", category: "programmingLanguages", priority: 3 },
  { id: "go", label: "GO", category: "programmingLanguages", priority: 3 },
  // { id: "test", label: "Test", category: "programmingLanguages", priority: 3 },
];

const obj = {
  label: "Test",
  category: "test",
  priority: 1,
};

function checkLabel(arrDataBase_, obj_) {
  const bool = arrDataBase_.every((el) => el.label !== obj_.label);
  return bool;
}

function addId(arrDataBase_, obj_) {
  try {
    if (!checkLabel(arrDataBase_, obj_)) throw new Error("совпадение есть");

    const id = { id: obj_.label.toLowerCase() };
    const newObj = { ...id, ...obj_ };
    arrDataBase_.push(newObj);
    return arrDataBase_;
  } catch (error) {
    return error.message;
  }
}

const res = addId(arrDataBase, obj);
console.log(res);
