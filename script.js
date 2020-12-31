document.addEventListener('DOMContentLoaded', function () {
    let isClick = false;
    const slideArray = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let prevSlide = currentSlide == 0 ? slideArray.length - 1 : currentSlide - 1;
    slideArray[currentSlide].classList.add('slide_m');
    slideArray[prevSlide].classList.add('slide_l');

    const slideLeft = document.querySelector('.slide-left');
    const slideRight = document.querySelector('.slide-right');

    slideLeft.onclick = (event) => {
        event.preventDefault();
        if (!isClick) {
            slideToLeft();
            isClick = true;
            setTimeout(() => {
                isClick = false;
            }, 1000)
        }
    }

    slideRight.onclick = (event) => {
        event.preventDefault();
        if (!isClick) {
            slideToRight();
            isClick = true;
            setTimeout(() => {
                isClick = false;
            }, 1000)
        }
    }

    function slideToLeft() {
        nextSlide = currentSlide == 0 ? slideArray.length - 1 : currentSlide - 1;
        leftSlide = nextSlide == 0 ? slideArray.length - 1 : nextSlide - 1;

        slideArray[currentSlide].classList.remove('slide_m');
        slideArray[nextSlide].classList.add('slide_m');
        slideArray[nextSlide].classList.remove('slide_l');
        currentSlide = nextSlide;
        setTimeout(() => {
            slideArray[leftSlide].classList.add('slide_l');
        }, 500)
    }
    function slideToRight() {
        nextSlide = currentSlide < slideArray.length - 1 ? currentSlide + 1 : 0;
        leftSlide = currentSlide == 0 ? slideArray.length - 1 : currentSlide - 1;
        slideArray[currentSlide].classList.remove('slide_m');
        slideArray[currentSlide].classList.add('slide_l');
        slideArray[leftSlide].classList.remove('slide_l');
        slideArray[nextSlide].classList.add('slide_m');
        currentSlide = nextSlide;

    }
});