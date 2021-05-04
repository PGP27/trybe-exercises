let button1 = document.getElementById("button-backgroundColor");
button1.addEventListener("click", fButton1);

function fButton1() {
    let e = document.getElementById("backgroundColor");
    document.body.style.backgroundColor = e.value;
};

let button2 = document.getElementById("button-color");
button2.addEventListener("click", fButton2);

function fButton2() {
    let e = document.getElementById("color");
    document.body.style.color = e.value;
};

let button3 = document.getElementById("button-fontSize");
button3.addEventListener("click", fButton3);

function fButton3() {
    let e = document.getElementById("fontSize");
    document.body.style.fontSize = e.value;
};

let button4 = document.getElementById("button-lineHeight");
button4.addEventListener("click", fButton4);

function fButton4() {
    let e = document.getElementById("lineHeight");
    document.body.style.lineHeight = e.value;
};

let button5 = document.getElementById("button-fontFamily");
button5.addEventListener("click", fButton5);

function fButton5() {
    let e = document.getElementById("fontFamily");
    document.body.style.fontFamily = e.value;
};