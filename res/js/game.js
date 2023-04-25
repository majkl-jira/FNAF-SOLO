const left = document.getElementById('clickleft');
const start = document.getElementById('startpoint');
const right = document.getElementById('clickright');
const exit= document.getElementById('clickexit');
const kam1= document.getElementById('kam1');
const kam2= document.getElementById('kam2');
const chodbaL= document.getElementById('chodbaL');
const chodbaR= document.getElementById('chodbaR');
const bg= document.getElementById('bg');

let goBack 

let inRoom = 1;

const dirArr1 = [left, right, exit]

doorOpen(left, dirArr1, start, chodbaL, 2)

function doorOpen(direction, arr, mainbg, chodba, val) {
    direction.onclick = () => {
        inRoom = val;
        arr.forEach(element => {
            element.style.display = "none";
        });
        mainbg.style.display = "none"
        chodba.style.display = "block"
        console.log(val);
        if (inRoom == 2) {
            goBack = document.createElement('div')
            goBack.style.width = '200px'
            goBack.style.height = '200px'
            goBack.style.backgroundColor = 'red'
            goBack.style.display = 'block'
            goBack.style.zIndex = '5'
        
            bg.appendChild(goBack)
        }
    }
}
