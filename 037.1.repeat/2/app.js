// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать функцию возвращающую новый
// массив из элементов, каждое значение которого имеет вид #name.
// [“hschool”, “company”] -> [“#hschool”, “#company”]

function doArray(n_) {
  let arr = [];

  for (let i = 0; i < n_; i++) {
    arr.push(prompt("введите значение"));
  }

  return arr;
}

function doNewArray(arr_) {
  try {
    // let newArr = [];

    // for (let i = 0; i < arr_.length; i++) {
    //   newArr.push("#" + arr_[i]);
    // }

    // arr_.forEach((el) => newArr.push("#" + el));

    // return newArr;
    
    const newArray = arr_.map((el) => "#" + el);

    return newArray;
  } catch (error) {
    return error.message;
  }
}

const n = 3;
const newArr = doNewArray(doArray(n));
console.log(newArr);
