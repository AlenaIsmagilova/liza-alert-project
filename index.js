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
