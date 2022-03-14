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

