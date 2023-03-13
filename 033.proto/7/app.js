// Возле дороги стоят столбы. Расстояние между столбами одинаковое и ширина
// столбов одинаковая. По условию задачи даны 3 инпута и кнопка. По клику на
// кнопку вызывается функция, принимающая три параметра: количество столбов
// (≥ 1); расстояние между столбами (10 – 30 метров); ширина столба (10 – 50
// сантиметров). Рассчитайте расстояние между первым и последним столбом в
// сантиметрах

const btn = document.querySelector("button");

const isvalid = (inpCounts, inpDistance, inpWidth) => {
  if (isNaN(inpCounts.value)) throw new Error('количество столбов: вы ввели не число');
  if (isNaN(inpDistance.value)) throw new Error('расстояние между столбами: вы ввели не число');
  if (isNaN(inpWidth.value)) throw new Error('ширина столба: вы ввели не число');
  if (inpCounts.value <= 1) throw new Error('неверное количество столбов, введите число ≥ 2');
  if (inpDistance.value < 10 || inpDistance.value > 30) throw new Error('неверное расстояние между столбами, введите число от 10 до 30');
  if (inpWidth.value < 10 || inpWidth.value > 50) throw new Error('неверная ширина столба, введите число от 10 до 50');
}

btn.addEventListener("click", function () {
  try{
  const pillarCounts = document.querySelector(".pillar-counts");
  const pillarDistance = document.querySelector(".pillar-distance");
  const pillarWidth = document.querySelector(".pillar-width");
  const div = document.querySelector("div");

  isvalid(pillarCounts, pillarDistance, pillarWidth);

  // let findDistance = (pillarCounts.value - 2) * pillarWidth.value + (pillarCounts.value - 1) * 100 * pillarDistance.value;
div.innerHTML = findDistance;

pillarCounts.value = '';
pillarDistance.value = '';
pillarWidth.value = '';
  } catch (error) {
    alert(error.message);
  }
});

