// Два автомобиля едут друг к другу с постоянными скоростями V1 и V2 км/ч.
// Определите, через какое время автомобили встретятся, если расстояние между
// ними равно S км. Добавить проверку на ввод только чисел

const number = prompt("введите число");


switch (isNaN(number) || parseInt(number)) {
  case 1:
    console.log("зима");
    break;
  case 2:
    console.log("весна");
    break;
  case 3:
    console.log("лето");
    break;
  case 4:
    console.log("осень");
    break;

  default:
    console.log("Некорректный ввод");
    break;
}
