const left = document.getElementById('clickleft');
const start = document.getElementById('startpoint');
const right = document.getElementById('clickright');
const exit= document.getElementById('clickexit');
const kam1= document.getElementById('kam1');
const kam2= document.getElementById('kam2');
const chodbaL= document.getElementById('chodbaL');
const chodbaR= document.getElementById('chodbaR');

left.onclick = () => {
startpoint.style.display = "none";
chodbaL.style.display = "block";
}