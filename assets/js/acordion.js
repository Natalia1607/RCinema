const item = document.querySelectorAll(".faq-card__toggle");
const list = document.querySelectorAll(".faq-list__item");

for (i of item) {
  i.onclick = function (event) {
    if (this.parentElement.classList.contains("is-open")) {
      this.parentElement.classList.remove("is-open");
    } else {
      list.forEach((node) => node.classList.remove("is-open"));
      this.parentElement.classList.add("is-open");
    }
  };
}
