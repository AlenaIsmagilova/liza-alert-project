const sidebarItem = document.querySelector(".sidebar__item");
const sidebarCloseButtons = document.querySelectorAll(
  ".sidebar__button-close-element"
);
const nextButton = document.querySelector('#next-button');  // Кнопка "Далее"
const prevButton = document.querySelector('#prev-button'); // Кнопка "Назад"

// Раскрытие - закрытие меню Содержание
sidebarCloseButtons.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    const li = evt.target.closest(".sidebar__item");
    const sidebarListContent = li.querySelector(".sidebar__list-content");
    sidebarListContent.classList.toggle("sidebar__list-content_opened");
    evt.target.classList.toggle("sidebar__button-close-element_opened");
  });
});

// Переход со страницы "Видео" на страницу "Тест"
nextButton.addEventListener('click', () => {
  window.location.href = 'test.html';
})

// Переход со страницы "Тест" на страницу "Тест превью"
prevButton.addEventListener('click', () => {
  window.location.href = 'test-preview.html';
})

