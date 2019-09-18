let today = new Date();
let currentMonth = today.getMonth();// выбранный месяц
let currentYear = today.getFullYear();// выбранный год
let selectYear = document.getElementById("year");// возвращает ссылку на выбранный год
let selectMonth = document.getElementById("month");// возвращает ссылку на выбранный месяц
let data = null;
let selectDay = 0;
let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]; // возвращает массив доступных месяцев

let monthAndYear = document.getElementById("monthAndYear");// возвращает ссылку на значение месяцгод
showCalendar(currentMonth, currentYear); // показывает календарь исходя из значения текущий месяц и текущий год



function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear; // выбранный год +1
    currentMonth = (currentMonth + 1) % 12;// выбранный месяц +1
    showCalendar(currentMonth, currentYear); // показать календарь после нажатия на некст
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear; // выбранный год -1
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;// выбранный месяц -1
    showCalendar(currentMonth, currentYear); // показать календарь после нажатия предыдущий
}
function list(){
 calendar.selectMonth = parseInt(document.getElementById("calendar-month").value); // возвращает ссылку на элемент с айди календарь месяц
    calendar.selectYear = parseInt(document.getElementById("calendar-year").value); // возвращает ссылку на элемент с айди календарь-год
    var daysInMonth = new Date(calendar.selectYear, calendar.selectMonth+1, 0).getDate(), // колличество дней в выбранном месяце
        startDay = new Date(calendar.selectYear, calendar.selectMonth, 1).getDay(), // первый день месяца
        endDay = new Date(calendar.selectYear, calendar.selectMonth, daysInMonth).getDay(); // последний день месяца

calendar.data = localStorage.getItem("calendar-" + calendar.currentMonth + "-" + calendar.currentYear);
    if (calendar.data==null) {
      localStorage.setItem("calendar-" + calendar.currentMonth + "-" + calendar.currentYear, "{}");
      calendar.data = {};
    } else {
      calendar.data = JSON.parse(calendar.data);
    }

    // Нарисовать HTML
    // контейнер и таблица
    var container = document.getElementById("cal-container"),
        cTable = document.createElement("table");
    cTable.id = "calendar";
    container.innerHTML = "";
    container.appendChild(cTable);

    // Первая строка - Дни
    var cRow = document.createElement("tr"),
        cCell = null,
        days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    if (cal.selectMonth) { days.push(days.shift()); }
    for (var d of days) {
      cCell = document.createElement("td");
      cCell.innerHTML = d;
      cRow.appendChild(cCell);
    }
    cRow.classList.add("head");
    cTable.appendChild(cRow);

    // Дней в месяце
    var total = squares.length;
    cRow = document.createElement("tr");
    cRow.classList.add("day");
    for (var i=0; i<total; i++) {
      cCell = document.createElement("td");
      if (squares[i]=="b") { cCell.classList.add("blank"); }
      else {
        cCell.innerHTML = "<div class='dd'>"+squares[i]+"</div>";
        if (cal.data[squares[i]]) {
          cCell.innerHTML += "<div class='evt'>" + cal.data[squares[i]] + "</div>";
        }
        cCell.addEventListener("click", function(){
          calendar.show(this);
        });
      }
      cRow.appendChild(cCell);
      if (i!=0 && (i+1)%7==0) {
        cTable.appendChild(cRow);
        cRow = document.createElement("tr");
        cRow.classList.add("day");
      }
    }

    // удалить редактировать добавить любое событие
    calendar.close();
  }
function save(evt) {
  // cal.save() : save event

    calendar.data[calendar.sDay] = document.getElementById("done").value;
    localStorage.setItem("calendar-" + calendar.selectMonth + "-" + calendar.selectYear, JSON.stringify(calendar.data));
    calendar.list();
  }





function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay(); // получение дня даты по выбранным атрибутам
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // тело календаря

   

    // подача данных о месяце и на странице через DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year; // переопределяем выбранный год в год  
    selectMonth.value = month; // переопределяем выбранный месяц в месяц

    // создание всех клеток
    let date = 1; 
    for (let i = 0; i < 6; i++) { 

        // создает строку таблицы
        let row = document.createElement("tr"); // создаём строку - элемент строка


        //создание отдельных ячеек, заполнение их данными.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");//  обьявляем клетку - создаём элемент пустой ячейки
                let cellText = document.createTextNode(""); // обьявляем текст клетки - создаём текстовый узел для элемента 
                cell.appendChild(cellText); // добавляем элемент (селтекст) в конец родительского (сел)
                row.appendChild(cell); 

            }

            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // цвет сегодняшней даты
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }

        tbl.appendChild(row); // добавление каждой строки в тело календаря.
    }
}

let selectedTd;

calendar.onclick = function(event) {
    console.log(" клик ")
    let target = event.target; // где был клик?
    console.log(" после таргета "); 
            
    modal.style.display = "block";
};


let selectedButton;

today.onclick = function(event) {
    console.log(" клик ")
    let target = event.target; // где был клик?
    console.log(" после таргета "); 
            
    modal2.style.display = "block";
};



var modal = document.getElementById("myModal");// получение модального окна
var btn = document.getElementById("myBtn");// получение кнопки, которая управляет окном
var span = document.getElementsByClassName("closed")[0];// получение спан элемента, который закрывает окно
btn.onclick = function() {
  modal.style.display = "block";// oткрытие окна при коике
}
span.onclick = function() {
  modal.style.display = "none";// закрытие окна при клике на спан
}
window.onclick = function(event) {// закрытие окна при клике вне его
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var modal2 = document.getElementById("myModal2");// получение модального окна
var btn = document.getElementById("myBtn2");// получение кнопки, которая управляет окном
var span = document.getElementsByClassName("close")[0];// получение спан элемента, который закрывает окно
btn.onclick = function() {
  modal2.style.display = "block";// oткрытие окна при коике
}
span.onclick = function() {
  modal2.style.display = "none";// закрытие окна при клике на спан
}
window.onclick = function(event) {// закрытие окна при клике вне его
  if (event.target == modal) {
    modal2.style.display = "none";
  }
}

