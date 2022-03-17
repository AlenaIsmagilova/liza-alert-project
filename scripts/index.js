const sidebarItem = document.querySelector(".sidebar__item");
const sidebarCloseButtons = document.querySelectorAll(
  ".sidebar__button-close-element"
);

// Раскрытие - закрытие меню Содержание
sidebarCloseButtons.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    const li = evt.target.closest(".sidebar__item");
    const sidebarListContent = li.querySelector(".sidebar__list-content");
    sidebarListContent.classList.toggle("sidebar__list-content_opened");
    evt.target.classList.toggle("sidebar__button-close-element_opened");
  });
});

// -----------------------Это Аленино, пока закомментировал-------------------------
/*
const resultButton = document.querySelector(".card__button-submit");

let checkedCheckboxesArr = [false, false, false];
let checkedRadiosArr = [false, false, false];

function successTest() {
  if (checkedCheckboxesArr && checkedRadiosArr) {
    resultButton.classList.add("button_status_initial");
    resultButton.classList.remove("button_status_disabled");
  } else {
    resultButton.classList.add("button_status_disabled");
    resultButton.classList.remove("button_status_initial");
  }
  return successTest;
}

document
  .querySelectorAll("input[type = checkbox]")
  .forEach((checkbox, index) => {
    checkbox.addEventListener("change", (evt) => {
      checkedCheckboxesArr[index] = evt.target.checked;
    });
  });

const checkboxInput = document.querySelector("input[type = checkbox]");
checkboxInput.addEventListener("change", function (evt) {
  checkedCheckboxInput = evt.target.checked;
 successTest();
});

const radioInput = document.querySelector("input[type = radio]");
radioInput.addEventListener("change", function (evt) {
  checkedRadioInput = evt.target.checked;
  successTest();
});
*/

//------------------------- Область видимости кнопки "Показать резкльтат"-------------------------------------

const resultButton = document.querySelector(".card__button-submit"); // Ищем в DOM дереве кнопку
const checkboxs = document.querySelectorAll(
  ".card__test-form-item_type_checkbox"
); // Ищем в DOM дереве чекбоксы
const radios = document.querySelectorAll(".card__test-form-item_type_circle"); //Ищем в DOM дереве радио переключатели
let checkboxStatus; // Переменные для хранения значений true/false для чекбоксов
let radioStatus; // Переменные для хранения значений true/false для радио

function changeButton(element) {
  //  Функция замены класса кнопки на активную
  element.classList.remove("button_status_disabled");
  element.classList.add("button_status_initial");
}

function changeButtonRverse(element) {
  // Функция замены класса кнопки на неактивную
  element.classList.remove("button_status_initial");
  element.classList.add("button_status_disabled");
}

function successTest(checkbox, radio) {
  // Функция проверки значений true/false чекбокса
  if (checkbox === radio) {
    // и радиокнопки. Если значения одинаковы -true,
    changeButton(resultButton); // выбран и чекбокс и радио, то заменяет класс,
  } else {
    // Если в одном из вопросов не поставлен ответ,
    changeButtonRverse(resultButton); // заменяет клаа обратно
  }
}

// Здесь происходит какая-то магия. В начале проходимся по всем чекбоксам, при изменении какого-либо чекбокса, он
// отмечается checked и его id заносится в объект arr (Думаю будет очень удобно использовать для выбора правильного
// и неправильного ответа). Если галочка снята id из массива удаляется!!!! Кстати результат можно увидеть в консоли. Далее проверяется если хотя бы один элеиент
// в массиве есть, то переменной присвается значение true. Ну и далее вызывается функция, которая сравнивает обе
// переменных

// checkboxs.forEach((checkbox) => {
//   checkbox.addEventListener("change", function () {
//     const checkboxElem = document.querySelectorAll(
//       ".card__test-form-item_type_checkbox:checked"
//     );
//     if (checkboxElem.length > 0) {
//       checkboxStatus = true;
//     } else {
//       checkboxStatus = false;
//     }
//     successTest(checkboxStatus, radioStatus);
//   });
// });

// Здесь все аналогично описанному выше, только для radio. Только с одним моментом, что для radio при нажатии
// значение всегда будет true, будет меняться только значение в массиве, записанное в id

// radios.forEach((radio) => {
//   radio.addEventListener("change", function () {
//     const radioElement = document.querySelectorAll(
//       ".card__test-form-item_type_circle:checked"
//     );
//     if (radioElement.length > 0) {
//       radioStatus = true;
//     }
//     successTest(checkboxStatus, radioStatus);
//   });
// });

function watchInputStatuses(inputsCollection, cssSelector) {
  inputsCollection.forEach((el) => {
    el.addEventListener("change", function () {
      const checkedInputs = document.querySelectorAll(cssSelector);
      if (checkedInputs.length > 0) {
        el.type === "checkbox" ? (checkboxStatus = true) : (radioStatus = true);
      } else {
        checkboxStatus = false;
      }
      successTest(checkboxStatus, radioStatus);
    });
  });
}

watchInputStatuses(radios, ".card__test-form-item_type_circle:checked");
watchInputStatuses(checkboxs, ".card__test-form-item_type_checkbox:checked");
