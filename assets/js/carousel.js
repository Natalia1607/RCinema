const slides = document.querySelectorAll('.slider-places__item'),
      dots = document.querySelectorAll('.place__dot');

let index = 0;

const activeSlide = n => {
    for(i of slides) {
        i.classList.remove('active');
    }
    slides[n].classList.add('active');
};

const activeDot = n => {
    for(i of dots) {
        i.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = int => {
    activeSlide(index);
    activeDot(index);
}

dots.forEach((item, indexDot)=> {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    });
});

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
};

/* setInterval(nextSlide, 6000);  */
