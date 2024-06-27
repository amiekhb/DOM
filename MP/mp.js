// audio

const playbtn = document.getElementsByClassName("playbtn")[0];
const nextBtn = document.getElementsByTagName("button")[2];
const audioPlayer = document.getElementsByTagName("audio")[0];
const playIcon = document.getElementsByClassName("fa-play")[0];
const pauseIcon = document.getElementsByClassName("fa-pause")[0];
console.log(playbtn);
console.log(nextBtn);
playbtn.addEventListener("click", () => {
  console.log("AP", audioPlayer.paused);
  console.assertlog(currentSong);
  if (audioPlayer.paused) {
    audioPlayer.play();
    playIcon.classList.add("hide");
    pauseIcon.classList.remove("hide");
    song_name.textContent = playList[currentSong].name;
  } else {
    audioPlayer.pause();
    playIcon.classList.remove("hide");
    pauseIcon.classList.add("hide");
  }
  console.log("AP", audioPlayer.paused);
});

const playList = [
  {
    title: Harp,
    source: "./music2.mp3",
  },
  {
    title: Guitar,
    source: "./m3.mp3",
  },
];
const playlistgName = ["Harp"];
let currentSong = 0;
nextBtn.addEventListener("click", () => {});
