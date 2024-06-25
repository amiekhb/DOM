const boxEls = document.getElementsByClassName("box");
console.log(boxEls);
const btnEl = document.getElementsByTagName("button")[0];
console.log(btnEl);

function changeBoxColor() {
  for (let i = 0; i < boxEls.length; i++) {
    const color = generateColor();
    boxEls[i].style.backgroundColor = color;
  }
}

btnEl.addEventListener("click", changeBoxColor);

function generateColor() {
  const rColor = Math.floor(Math.random() * 256);
  const gColor = Math.floor(Math.random() * 256);
  const bColor = Math.floor(Math.random() * 256);
  return `rgb(${rColor},${gColor},${bColor})`;
}
//addbox
const addBtn = document.getElementById(addbtn);
addbtn.addEventListener("click", function () {
  const newBox = document.createElement("div");
  newBox.className = "box";
  const parent = document.getElementsByClassName("container")[0];
  parent.appendChild(newBox);
});
// change box dimension
const changeBtn = document.getElementById("changeBtn");
changeBtn.addEventListener("click", () => {
  console.log("work");
  console.log(boxEls.classList);
  boxEls.classList.toggle("big");
});
// audio;

const playBtn = document.getElementById("playbtn");

playBtn.addEventListener("click", () => {
  //play song
  const audio = document.getElementsByTagName("audio")[0];
  audio.src = "https://www.youtube.com/watch?v=uJ_1HMAGb4k";
  audio.play();
  console.log("AUD", audio);
});
