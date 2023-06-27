// Напишите код, который сделает из массива объект
// [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}

interface istyle {
  name: string;
  value: number;
}

const arr9: istyle[] = [
  { name: "width", value: 10 },
  { name: "height", value: 20 },
];

function doObject(arr9: istyle[]) {
  const obj9 = {};

  for (let i = 0; i < arr9.length; i++) {
    obj9[arr9[i].name] = arr9[i].value;
  }

  return obj9;
}
const res9 = doObject(arr9);
console.log(res9);
