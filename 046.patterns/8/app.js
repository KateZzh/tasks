// 8. Необходимо по нажатию на кнопку включать музыку
// 9. Необходимо по кнопку включать и выключать песню

const btn = document.querySelector("button");
const audio = document.querySelector("audio");

let flag = false;

btn.addEventListener("click", () => {
  audio.src = "./papa_roach_-_getting_away_with_murder.mp3";

  if (flag === false) {
    audio.play();
    flag = true;
  } else {
    audio.pause();
    flag = false;
  }
});
