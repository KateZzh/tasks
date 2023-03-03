// Банкоматы позволяют использовать 4 или 6 значные PIN-коды, а PIN-коды не
// могут содержать ничего, кроме ровно 4 или ровно 6 цифр. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать
// "1234“ -> true
// "12345“ -> false
// "a234“ -> false

const pin = "123456";

function checkPinCode(pin_) {
  try {
    if (/^\d+$/gm.test(pin_) && (pin_.length === 4 || pin_.length === 6)) return true;
    throw new Error("incorrect PIN code");
  } catch (error) {
    return error.message;
  }
}

const result = checkPinCode(pin);
console.log(result);
