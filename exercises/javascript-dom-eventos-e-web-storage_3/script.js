function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function addDays() {
    let dezDays = document.getElementById("days");
    for (let i = 0; i < dezDaysList.length; i++) {
        let li = document.createElement("li");
        if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
            li.className = "day holiday";
            li.innerHTML = dezDaysList[i];
            dezDays.appendChild(li);
        }
        else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
            li.className = "day friday";
            li.innerHTML = dezDaysList[i];
            dezDays.appendChild(li);
        }
        else if (dezDaysList[i] === 25) {
            li.className = "day holiday friday";
            li.innerHTML = dezDaysList[i];
            dezDays.appendChild(li);
        }
        else {
            li.className = "day";
            li.innerHTML = dezDaysList[i];
            dezDays.appendChild(li);
        }
    }   
};

addDays();

function addButton(string) {
    let div = document.querySelector(".buttons-container")
    let button = document.createElement("button");
    button.id = "btn-holiday";
    button.innerHTML = string;
    div.appendChild(button);
};

addButton("Feriados");

let button = document.getElementById("btn-holiday");
button.addEventListener("click", eventButton);

function eventButton() {
    let holidays = document.querySelectorAll(".holiday");
    if (holidays[0].style.backgroundColor === "yellow") {
        for (let i = 0; i < holidays.length; i++) {
            holidays[i].style.backgroundColor = "rgb(238,238,238)";
        }
    }
    else {
        for (let i = 0; i < holidays.length; i++) {
            holidays[i].style.backgroundColor = "yellow";
        }
    }
};

function addFriday(string) {
    let div = document.querySelector(".buttons-container")
    let button = document.createElement("button");
    button.id = "btn-friday";
    button.innerHTML = string;
    div.appendChild(button);
};

addFriday("Sexta-feira");

let button2 = document.getElementById("btn-friday");
button2.addEventListener("click", eventFriday);

function eventFriday() {
    let fridays = document.querySelectorAll(".friday");
    let aux = [4, 11, 18, 25];
    if (fridays[0].innerText === "Sextou") {
        for (let i = 0; i < fridays.length; i++) {
            fridays[i].innerText = aux[i];
            console.log(aux[i]);
        }
    }
    else {
        for (let i = 0; i < fridays.length; i++) {
            fridays[i].innerText = "Sextou";
        }
    }
};

let days = document.getElementsByClassName("day");
for (let i = 0; i < days.length; i++) {
    days[i].addEventListener("mouseover", overDays);
    days[i].addEventListener("mouseleave", leaveDays);
    days[i].addEventListener("click", tarefa);
}

function overDays(evento) {
    let e = evento.target;
    e.style.fontSize = "40px";
};

function leaveDays(evento) {
    let e = evento.target;
    e.style.fontSize = "20px";
};

function addTarefa(string) {
    let div = document.querySelector(".my-tasks");
    let span = document.createElement("span");
    span.innerHTML = string;
    div.appendChild(span);
};

addTarefa("Cozinhar");

function addLegendaCorTarefa(string) {
    let div = document.querySelector(".my-tasks");
    let d = document.createElement("div");
    d.className = "task";
    d.style.backgroundColor = string;
    div.appendChild(d);
};

addLegendaCorTarefa("red");

let div = document.querySelector(".task");
div.addEventListener("click", clickTarefa);

function clickTarefa(evento) {
    let e = evento.target;
    if (e.className === "task selected") {
        e.className = "task"; 
    }
    else {
        e.className = "task selected"; 
    }
    console.log(e.className);
}

function tarefa(evento) {
    let e = evento.target;
    if (div.className === "task selected") {
        e.style.color = div.style.backgroundColor;
    }
    else {
        e.style.color = "rgb(119,119,119)";
    }
}