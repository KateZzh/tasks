// Update
// На входе объект вида
// {"id" : "test" , "label": "Test", "category": "test", "priority": 1 },
// Необходимо найти id клиента в массиве БД.
// Если совпадение есть, произвести обновление значений для соответствующих
// ключей.
// Примечание: для удаления объекта в БД можно отфильтровать объект БД не
// включая id клиента. В результативный массив запушить клиентский, тем самым
// обновить объект БД
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
  { id: "test", label: "Test", category: "programmingLanguages", priority: 3 },
];

const obj = { id: "test", label: "Test", category: "test", priority: 1 };

function checkId(arrDataBase_, obj_) {
  const bool = arrDataBase_.every((el) => el.id !== obj_.id);
  return bool;
}

function UpdateId(arrDataBase_, obj_) {
  try {
    if (checkId(arrDataBase_, obj_)) throw new Error("совпадения по id нет");

    const newArrDataBase = arrDataBase_.filter((el) => el.id !== obj_.id);
    newArrDataBase.push(obj_);

    return newArrDataBase;
  } catch (error) {
    return error.message;
  }
}

const updateArrDataBase = UpdateId(arrDataBase, obj);
console.log(updateArrDataBase);
