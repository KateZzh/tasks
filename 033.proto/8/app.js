// На вход программе подается число в двоичной системе счисления. Необходимо
// преобразовать его в десятичную систему счисления

function doDecimalNumSystem(str) {
  try {
    let decNum = 0;

    for (let i = 0; i < str.length; i++) {
      decNum += str[i] * 2 ** (str.length - 1 - i);
    }

    console.log(decNum);
  } catch (error) {
    console.log(error.message);
  }
}

doDecimalNumSystem("10101010010");
