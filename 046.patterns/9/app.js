// Добавить переключение песен

const left = document.querySelector(".btnLeft");
const run = document.querySelector(".btnRun");
const rigth = document.querySelector(".btnRigth");
const audio = document.querySelector("audio");
const artist = document.querySelector(".artist");
const nameOfSong = document.querySelector(".nameOfSong");
const songCover = document.querySelector(".songCover");

let flag = false;
let currentIndexSong = 0;

const songs = [
  {
    id: 1,
    path: "./rington_1.mp3",
    artist: "AAA",
    nameOfSong: "rington_1",
    imgPath: "background-image: url(./assets/img1.jpg)",
  },
  {
    id: 2,
    path: "./rington_2.mp3",
    artist: "BBB",
    nameOfSong: "rington_2",
    imgPath: "background-image: url(./assets/img2.jpg)",
  },
  {
    id: 3,
    path: "./rington_3.mp3",
    artist: "CCC",
    nameOfSong: "rington_3",
    imgPath: "background-image: url(./assets/img3.jpg)",
  },
];

run.addEventListener("click", function () {
  audio.src = songs[currentIndexSong].path;
  artist.textContent = songs[currentIndexSong].artist;
  nameOfSong.textContent = songs[currentIndexSong].nameOfSong;
  songCover.style = songs[currentIndexSong].imgPath;

  if (flag === false) {
    audio.play();
    flag = true;
    this.style = "background-image: url(./assets/group6.png)";
  } else {
    audio.pause();
    flag = false;
    this.style = "background-image: url(./assets/playBtn.png)";
  }
});

left.addEventListener("click", function () {
  if (currentIndexSong === 0) return;

  currentIndexSong--;
  audio.src = songs[currentIndexSong].path;
  artist.textContent = songs[currentIndexSong].artist;
  nameOfSong.textContent = songs[currentIndexSong].nameOfSong;
  songCover.style = songs[currentIndexSong].imgPath;
  audio.play();
  flag = true;
  run.style = "background-image: url(./assets/group6.png)";
});

rigth.addEventListener("click", function () {
  if (currentIndexSong === songs.length - 1) return;

  currentIndexSong++;
  audio.src = songs[currentIndexSong].path;
  artist.textContent = songs[currentIndexSong].artist;
  nameOfSong.textContent = songs[currentIndexSong].nameOfSong;
  songCover.style = songs[currentIndexSong].imgPath;
  audio.play();
  flag = true;
  run.style = "background-image: url(./assets/group6.png)";
});
