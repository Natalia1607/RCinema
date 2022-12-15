const item = document.querySelectorAll('.faq-card__toggle');
const list = document.querySelectorAll('.faq-list__item');

for(i of item) {
    i.onclick = function(event){
        list.forEach(node => node.classList.remove('is-open'));
        this.parentElement.classList.toggle('is-open');
    };
}