// На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//   от 1 до n). Необходимо вывести количество пар ключ значение объекта)

function doObject(n) {
  try {
    obj = {};
    
    for (let i = 0; i < n; i++) {
      obj[i] = i;
    }

    const amount = Object.entries(obj);

    console.log(amount.length);
  } catch (error) {
    console.log(error.message);
  }
}

doObject(5);
