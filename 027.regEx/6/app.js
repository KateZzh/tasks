// На вход подается строка вида: путь к файлу. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать
// C:\Users\Admin\Desktop\test.txt -> true
// C:/Users/Admin/Desktop/test.txt -> true

const str = "C:\\Users\\Admin\\Desktop\\test.txt";

function isValid(str_) {
  try {
    if (!/^[A-Za-z]{1}:(\\|\/)\w+(\\|\/)\w+(\\|\/)\w+(\\|\/)\w+\.\w{1,8}$/gm.test(str_)) throw new Error("false");
    return true;
  } catch (error) {
    return error.message;
  }
}

const result = isValid(str);
console.log(result);
