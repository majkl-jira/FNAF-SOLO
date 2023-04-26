const left = document.getElementById("clickleft");
const start = document.getElementById("startpoint");
const right = document.getElementById("clickright");
const exit = document.getElementById("clickexit");
const kam = document.getElementById("kam");
const chodbaL = document.getElementById("chodbaL");
const chodbaR = document.getElementById("chodbaR");
const bg = document.getElementById("bg");
const timehod = document.getElementById("timehod");
const pychhod = document.getElementById("pychhod");
const camClick1 = document.getElementById("camClick1");
const camClick2 = document.getElementById("camClick2");
const camDiv = document.getElementById("camDiv");
const kam1withKai = document.getElementById("kam1withKai");
const chodbaRwithKai = document.getElementById("chodbaRwithKai");
const chodbaLwithKai = document.getElementById("chodbaLwithKai");
const fakac = document.getElementById("fakac");

let goBack;

let inRoom = 4;
let sanity = 100;
let sanityTime = 1000;
let timeVal = 12;
let timeTime = sanityTime * 5;
let kaiRoom = 1;
let fakacCanClick = 1;


const dirArr1 = [left, right, exit, camDiv];
const dirArr2 = [left, right, exit];

highlightBg(left)
highlightBg(right)
pychhod.innerHTML = `Sanity: ${sanity}`;

  doorDir(left, dirArr1, start, chodbaL, 2);
  doorDir(right, dirArr1, start, chodbaR, 3);

camDir();
valSubstract(pychhod, sanity, sanityTime, "Sanity:");
valSubstract(timehod, timeVal, timeTime, "", 1);
kaiWalk()
fakacButton()


function doorDir(direction, arr, mainbg, chodba, inRoomVal) {
  direction.onclick = () => {
    console.log("KaiRoom: " + kaiRoom);
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
        inRoom = 4;
        kaiCheck(3, arrDisplay(dirArr1, mainbg, chodbaLwithKai, "block", "none"), arrDisplay(arr, mainbg, chodba, "block", "none"))
        goBack.style.display = "none";
      }
      if (kaiRoom == 2) {
        chodba.src = "./res/img/chodbaLwithKai.jpg";
      }
    }

    if (inRoom == 3) {
      goBack.style.bottom = "0%";
      goBack.style.left = "33%";
      goBack.style.width = "35%";
      goBack.style.height = "20%";

      bg.appendChild(goBack);

      goBack.onclick = () => {
        inRoom = 4;
        kaiCheck(3, arrDisplay(dirArr1, mainbg, chodbaLwithKai, "block", "none"), arrDisplay(arr, mainbg, chodba, "block", "none"))
        goBack.style.display = "none";
      }
      if (kaiRoom == 3) {
        chodba.src = "./res/img/chodbaLwithKai.jpg";
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
    inRoom = 1;
    if (kaiRoom == 1) {
      arrDisplay(dirArr2, start, kam1withKai,  "none", "block")
    }
    else{
      arrDisplay(dirArr2, start, kam,  "none", "block")
    }
  }
  camClick1.onclick = () => {
    inRoom = 4;
    if (kaiRoom == 1) {
      arrDisplay(dirArr2, start, kam1withKai,  "block", "none")
    }
    else{
      arrDisplay(dirArr2, start, kam,  "block", "none")
    }
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

function valSubstract(element, value, time, string, id){
  setInterval(() => {
    value--;
    element.innerHTML = `${string} ${value}`;
    if (id == 1) {
      if (value == 11) {
        value = 1;
        element.innerHTML = `${string} ${value}`;
        console.log("Banger")
        value+=2;
      }
      else if (value >= 1) {
        value+=2;
        console.log("Chabr")
    }
  }
  }, time);
}

function kaiWalk() {
  setInterval(() => {
    if (kaiRoom == 1) {
      kaiRoom = Math.floor(Math.random() * (3 - 2 + 1) + 2)
    }
    else if (kaiRoom == 2 || kaiRoom == 3) {
      // Pokud fakac tak zmizi, Pokud ne kaiRoom = 4
      
    }

    if (inRoom == 1 && kaiRoom == 1) {
      arrDisplay(dirArr2, start, kam1withKai,  "none", "block")
    }
    else if (inRoom == 1 && kaiRoom != 1){
      arrDisplay(dirArr2, kam1withKai, kam,  "none", "block")
    }

    if (inRoom == 2 && kaiRoom == 2) {
      arrDisplay(dirArr1, chodbaL, chodbaLwithKai, "none", "block")
    }
    else if (inRoom == 2 && kaiRoom!= 2){
      arrDisplay(dirArr1, chodbaLwithKai, chodbaL, "none", "block")
    }

    if (inRoom == 3 && kaiRoom == 3) {
      arrDisplay(dirArr1, chodbaR, chodbaLwithKai, "none", "block")
      //IMG
    }
    else if (inRoom == 3 && kaiRoom!= 3){
      arrDisplay(dirArr1, chodbaLwithKai, chodbaR, "none", "block")
      //IMG
    }
    console.log(kaiRoom)
  }, 5000);
}

function kaiCheck(value , func, func2) {
  if (kaiRoom == value) {
    func;
  }
  else{
    func2;
  }
}

function fakacButton() {
  fakac.onclick = () => {
    if (fakacCanClick == 1) {
      kaiRoom = 1
      fakacCanClick = 0
      fakac.style.display = "none"
      setTimeout(() => {
        fakacCanClick = 1
        fakac.style.display = "block"
      }, 10000);  
    }
    else {
      console.log("Cooldown")
    }
  }
}


