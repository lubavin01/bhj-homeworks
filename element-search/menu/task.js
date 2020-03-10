const links = document.querySelectorAll('.menu__link');

menuClick = function (event) {

    const siblings = [...event.target.closest('li.menu__item').children]
        .filter(item => item !== event.target);

    if (siblings.length) {
        const nodeList = document.querySelectorAll('ul.menu_active');
        nodeList.forEach(
            item => item.classList.remove('menu_active'));

        siblings[0].classList.add('menu_active');
        return false;
    }
}


links.forEach(item => item.onclick = menuClick);

