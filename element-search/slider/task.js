const dotsContainer = document.querySelector('div.slider__dots');
const blocksContainer = document.querySelector('div.slider__items');
1

getActiveIndex = (element) => {

    return [...element.parentElement.children]
        .findIndex(item => item === element);

}

setActiveDotByIndex = (idx) => {

    const active = dotsContainer.querySelector('.slider__dot_active');
    if (active) {
        active.classList.remove('slider__dot_active');
    }        

    const element = [...dotsContainer.children]
            .find( (item, index) => index === idx );

    element.classList.add('slider__dot_active');
}

setActiveBlockByIndex = (idx) => {

    const active = blocksContainer.querySelector('.slider__item_active');
    if (active) {
        active.classList.remove('slider__item_active');
    }        

    const element = [...blocksContainer.children]
            .find( (item, index) => index === idx );

    element.classList.add('slider__item_active');
}

onArrowClick = function (event) {
    const activeItem = document.querySelector('div.slider__item_active');

    let nextItem;
    if (event.target.matches('.slider__arrow_prev')) {
        nextItem = activeItem.previousElementSibling;

        if (!nextItem) {
            nextItem = activeItem.parentNode.lastElementChild;
        }
    } else if (event.target.matches('.slider__arrow_next')) {
        nextItem = activeItem.nextElementSibling;

        if (!nextItem) {
            nextItem = activeItem.parentNode.firstElementChild;
        }
    }

    activeItem.classList.remove('slider__item_active');
    nextItem.classList.add('slider__item_active');

    const idx = getActiveIndex(nextItem);

    setActiveDotByIndex(idx);
}

onDotClick = function (event) {
    // const activeDot = document.querySelector('div.slider__dot_active');
    // if (activeDot) {
    //     activeDot.classList
    // }

    const idx = getActiveIndex(event.target);

    setActiveBlockByIndex(idx);

    setActiveDotByIndex(idx);
}

const arrows = document.querySelectorAll('div.slider__arrow');
arrows.forEach(item => item.onclick = onArrowClick);

const dots = document.querySelectorAll('div.slider__dot');
dots.forEach(item => item.onclick = onDotClick);