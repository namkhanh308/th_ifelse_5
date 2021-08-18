let mot = document.getElementById("mot")
mot.addEventListener("click", one)
let hai = document.getElementById("hai")
hai.addEventListener("click", two)
let ba = document.getElementById("ba")
ba.addEventListener("click", three)
let bon = document.getElementById("bon")
bon.addEventListener("click", four)
let nam = document.getElementById("nam")
nam.addEventListener("click", five)
let sau = document.getElementById("sau")
sau.addEventListener("click", six)
let bay = document.getElementById("bay")
bay.addEventListener("click", seven)
let tam = document.getElementById("tam")
tam.addEventListener("click", eight)
let chin = document.getElementById("chin")
chin.addEventListener("click", nine)



let cong = document.getElementById("cong")
cong.addEventListener("click", plus)
let tru = document.getElementById("tru")
tru.addEventListener("click", minus)
let nhan = document.getElementById("nhan")
nhan.addEventListener("click", multiply)
let chia = document.getElementById("chia")
chia.addEventListener("click", division)
let xoa = document.getElementById("xoa")
xoa.addEventListener("click", del)


let bang = document.getElementById("bang")
bang.addEventListener("click", equal)
var number1;
var number2;
var number3;



function one(){
    let view = document.getElementById("view")
    view.innerText = "1";
    if(number1 == undefined){
        number1 = 1;
    }
    else{
        number3 = 1;
    }
}
function two(){
    let view = document.getElementById("view")
    view.innerText = "2";
    if(number1 == undefined){
        number1 = 2;
    }
    else{
        number3 = 2;
    }
}
function three(){
    let view = document.getElementById("view")
    view.innerText = "3";
    if(number1 == undefined){
        number1 = 3;
    }
    else{
        number3 = 3;
    }
}
function four(){
    let view = document.getElementById("view")
    view.innerText = "4";
    if(number1 == undefined){
        number1 = 4;
    }
    else{
        number3 = 4;
    }
}
function five(){
    let view = document.getElementById("view")
    view.innerText = "5";
    if(number1 == undefined){
        number1 = 5;
    }
    else{
        number3 = 5;
    }
}
function six(){
    let view = document.getElementById("view")
    view.innerText = "6";
    if(number1 == undefined){
        number1 = 6;
    }
    else{
        number3 = 6;
    }
}
function seven(){
    let view = document.getElementById("view")
    view.innerText = "7";
    if(number1 == undefined){
        number1 = 7;
    }
    else{
        number3 = 7;
    }
}
function eight(){
    let view = document.getElementById("view")
    view.innerText = "8";
    if(number1 == undefined){
        number1 = 8;
    }
    else{
        number3 = 8;
    }
}
function nine(){
    let view = document.getElementById("view")
    view.innerText = "9";
    if(number1 == undefined){
        number1 = 9;
    }
    else{
        number3 = 9;
    }
}
function plus(){
    let view = document.getElementById("view")
    view.innerText = "+";
    number2 = "+"
}
function minus(){
    let view = document.getElementById("view")
    view.innerText = "-";
    number2 = "-"
}
function multiply(){
    let view = document.getElementById("view")
    view.innerText = "*";
    number2 = "*"
}
function division(){
    let view = document.getElementById("view")
    view.innerText = "/";
    number2 = "/"
}
function del(){
    let view = document.getElementById("view")
    view.innerText = "X";
    number1 = undefined;
    number2 = undefined;
    number3 = undefined;
}



function equal(){
    let view = document.getElementById("view")
    if(number2=="+"){
        view.innerText = number1+number3;
        number1 = undefined;
        number2 = undefined;
        number3 = undefined;
    }
    else if(number2=="-"){
        view.innerText = number1-number3;
        number1 = undefined;
        number2 = undefined;
        number3 = undefined;
    }
    else if(number2=="*"){
        view.innerText = number1*number3;
        number1 = undefined;
        number2 = undefined;
        number3 = undefined;
    }
    else if(number2=="/"){
        view.innerText = number1/number3;
        number1 = undefined;
        number2 = undefined;
        number3 = undefined;
    }
}


