const left = document.getElementById("clickleft");
const start = document.getElementById("startpoint");
const right = document.getElementById("clickright");
const exit = document.getElementById("clickexit");
const kam = document.getElementById("kam");
const chodbaL = document.getElementById("chodbaL");
const chodbaR = document.getElementById("chodbaR");
const bg = document.getElementById("bg");
const time = document.getElementById("time");
const timehod = document.getElementById("timehod");
const pychhod = document.getElementById("pychhod");
const camClick1 = document.getElementById("camClick1");
const camClick2 = document.getElementById("camClick2");
const camDiv = document.getElementById("camDiv");
const kam1withKai = document.getElementById("kam1withKai");

highlightBg(left)
highlightBg(right)

let goBack;

let inRoom = 1;

const dirArr1 = [left, right, exit, camDiv];
const dirArr2 = [left, right, exit];


doorDir(left, dirArr1, start, chodbaL, 2);
doorDir(right, dirArr1, start, chodbaR, 3);
camDir();


function doorDir(direction, arr, mainbg, chodba, inRoomVal) {
  direction.onclick = () => {
    inRoom = inRoomVal;
    arrDisplay(arr, mainbg, chodba, "none", "block")
    goBack = document.createElement("div");
    goBack.style.width = "12%";
    goBack.style.height = "60%";
    goBack.style.display = "block";
    goBack.style.zIndex = "5";
    goBack.style.position = "absolute";
    goBack.style.cursor = "pointer";

    highlightBg(goBack);

    if (inRoom == 2) {
      goBack.style.top = "30%";
      goBack.style.right = "15%";

      bg.appendChild(goBack);

      goBack.onclick = () => {
        arrDisplay(arr, mainbg, chodba, "block", "none")
        goBack.style.display = "none";
      }
    }

    if (inRoom == 3) {
      goBack.style.bottom = "0%";
      goBack.style.left = "33%";
      goBack.style.width = "35%";
      goBack.style.height = "20%";

      bg.appendChild(goBack);

      goBack.onclick = () => {
        arrDisplay(arr, mainbg, chodba, "block", "none")
        goBack.style.display = "none";
      }
    }
  };
}

function arrDisplay(array, div, div2, first, second){
  array.forEach(element => {
    element.style.display = first;
  });
  div.style.display = first;
  div2.style.display = second;
}

function camDir(){
  camClick2.onclick = () => {
    arrDisplay(dirArr2, start, kam1withKai,  "none", "block")
  }
  camClick1.onclick = () => {
    arrDisplay(dirArr2, start, kam1withKai,  "block", "none")
  }
}

function highlightBg(highDiv){
  highDiv.style.backgroundColor = "transparent";
  highDiv.onmouseenter = () => {
    highDiv.style.backgroundColor = "rgba(236, 57, 41, 0.35)";
  }

  highDiv.onmouseleave = () => {
    highDiv.style.backgroundColor = "transparent";
  }
}
