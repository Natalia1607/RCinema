const prev = document.querySelector('.slider-nav__arrow--prev'),
      next = document.querySelector('.slider-nav__arrow--next'),
      gallery = document.querySelectorAll('.slider-gallery__list');
let index = 0;

const activeSlide = n => {
    for(slide of gallery) {
        slide.classList.remove('slider-gallery__list--acive');
    }
    gallery[n].classList.add('slider-gallery__list--acive');
};

const prepareCurrentSlide = int => {
    activeSlide(index);
};

const nextSlide = () => {
    if(index == gallery.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
};

const prevSlide = () => {
    if(index == 0) {
        index = gallery.length - 1;
        prepareCurrentSlide(index); 
    } else {
        index--;
        prepareCurrentSlide(index);
    }
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

/* setInterval(nextSlide, 3000); */