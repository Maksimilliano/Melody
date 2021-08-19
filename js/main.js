$(document).ready(function () {
  var currentFloor = 2; // Переменная, где хранится текуущий этаж
  var floorPath = $(".home-image path"); // Каждый отдельный этаж в SVG
  var counterUp = $(".counter-up");/*кнопка увеличения этажа*/
  var counterDown = $(".counter-down");/*кнопка уменьшения этажа*/

  // Функция при наведении мышью на этаж
  floorPath.on("mouseover",function (){
  floorPath.removeClass("current-floor"); // Удаляем активный класс у этажей
  currentFloor = $(this).attr("data-floor"); // Получаем значение текущего этажа
  $(".counter").text(currentFloor); // Записываем значение этажа в счётчик справа
}); 

counterUp.on("click",function (){ // Отслеживаем клик по кнопке вверх
  // Провряем значение этажа, оно не должно быть больше 18-ти
  if (currentFloor < 18) { 
  currentFloor++; // Прибавляем один этаж
  uscurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false}); // Форматируем переменную с этажом, чтобы было 01, а не 1
  $(".counter").text(uscurrentFloor); // Записываем значение этажа в счётчик справа
  floorPath.removeClass("current-floor") // Удаляем активный класс у этажей
  $(`[data-floor=${uscurrentFloor}]`).toggleClass("current-floor"); // Подсвечиваем текущий этаж
  }
});

counterDown.on("click",function (){ // Отслеживаем клик по кнопке вниз
  // Провряем значение этажа, оно не должно быть мньше 02
  if (currentFloor > 02) {
  currentFloor--; // Убавляем один этаж
  uscurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false}); // Форматируем переменную с этажом, чтобы было 01, а не 1
  $(".counter").text(uscurrentFloor); // Записываем значение этажа в счётчик справа
  floorPath.removeClass("current-floor") // Удаляем активный класс у этажей
  $(`[data-floor=${uscurrentFloor}]`).toggleClass("current-floor"); // Подсвечиваем текущий этаж
  }
});
});