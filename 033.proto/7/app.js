// Возле дороги стоят столбы. Расстояние между столбами одинаковое и ширина
// столбов одинаковая. По условию задачи даны 3 инпута и кнопка. По клику на
// кнопку вызывается функция, принимающая три параметра: количество столбов
// (≥ 1); расстояние между столбами (10 – 30 метров); ширина столба (10 – 50
// сантиметров). Рассчитайте расстояние между первым и последним столбом в
// сантиметрах

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const pillarCounts = document.querySelector("pillar-counts");
  const pillarDistance = document.querySelector("pillar-distance");
  const pillarWidth = document.querySelector("pillar-width");
});

function doWith(pillarCounts_, pillarDistance_, pillarWidth_) {
  let result =
    pillarCounts_ * pillarWidth_ + (pillarCounts_ - 1) * 100 * pillarDistance_;

  return result;
}

console.log(doWith(10, 20, 15));
