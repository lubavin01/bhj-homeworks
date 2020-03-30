switchRotator = () => {
    const currentElement = document.querySelector('.rotator__case_active');
    currentElement.classList.toggle('rotator__case_active');

    let nextElement = currentElement.nextElementSibling;
    if (!nextElement) {
        nextElement = currentElement.parentElement.firstElementChild;
    }
    nextElement.classList.toggle('rotator__case_active');
    nextElement.style.color = nextElement.dataset.color;

    setTimeout(switchRotator, nextElement.dataset.speed);
}

switchRotator();