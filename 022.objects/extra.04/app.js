// Delete
// Удаление объекта из массива по id
// Примечание: для удаления объекта в БД можно отфильтровать объект БД не
// включая id клиента
// Если совпадения по id нет – ошибка

const arrDataBase = [
  {
    id: "javascript",
    label: "JavaScript",
    category: "programmingLanguages",
    priority: 1,
  },
  {
    id: "typescript",
    label: "TypeScript",
    category: "programmingLanguages",
    priority: 1,
  },
  { id: "sql", label: "SQL", category: "programmingLanguages", priority: 2 },
  { id: "java", label: "Java", category: "programmingLanguages", priority: 3 },
  { id: "go", label: "GO", category: "programmingLanguages", priority: 3 },
  { id: "test", label: "Test", category: "test", priority: 1 },
];

const obj = { id: "test", label: "Test", category: "test", priority: 1 };

function checkId(arrDataBase_, obj_) {
  const bool = arrDataBase_.every((el) => el.id !== obj_.id);
  return bool;
}

function deleteId(arrDataBase_, obj_) {
  try {
    if (checkId(arrDataBase_, obj_)) throw new Error("совпадения по id нет");

    const newArrDataBase = arrDataBase_.filter((el) => el.id !== obj_.id);

    return newArrDataBase;
  } catch (error) {
    return error.message;
  }
}

const newArrDataBase = deleteId(arrDataBase, obj);
console.log(newArrDataBase);
