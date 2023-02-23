// На вход подается строка вида “имя фамилия возраст”. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

const str = "Katsiaryna Zhytniak 27";

function isValid(str_) {
  try {
    if (!/^[A-Z][a-z]+ [A-Z][a-z]+ [0-9]{1,2}$/gm.test(str_))
      throw new Error(`doesn't work`);
    return true;
  } catch (error) {
    return error.message;
  }
}
const result = isValid(str);
console.log(result);
