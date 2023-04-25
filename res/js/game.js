const left = document.getElementById('clickleft');
const start = document.getElementById('startpoint');
const right = document.getElementById('clickright');
const exit = document.getElementById('clickexit');
const kam = document.getElementById('kam');
const chodbaL = document.getElementById('chodbaL');
const chodbaR = document.getElementById('chodbaR');
const bg = document.getElementById('bg');
const time = document.getElementById('time');
const timehod = document.getElementById('timehod');
const pychhod = document.getElementById('pychhod');

let goBack;

let inRoom = 1;

const dirArr1 = [left, right, exit];

doorLeft(left, dirArr1, start, chodbaL, 2);

function doorLeft(direction, arr, mainbg, chodba, val) {
    direction.onclick = () => {
        inRoom = 2;
        arr.forEach(element => {
            element.style.display = "none";
        });
        mainbg.style.display = "none";
        chodba.style.display = "block";
        console.log(val);
        if (inRoom == 2) {
            goBack = document.createElement('div');
            goBack.style.width = '12%';
            goBack.style.height = '60%'; 
            goBack.style.backgroundColor = 'red';
            goBack.style.display = 'block';
            goBack.style.zIndex = '5';
            goBack.style.position = 'absolute';
            goBack.style.top = '30%';
            goBack.style.right = '15%';
        
            bg.appendChild(goBack);
        }
    }
}

