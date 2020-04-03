'use strict';

const book = document.getElementById('book');
const fontControls = document.querySelector('.book__control_font-size');
const colorControls = document.querySelector('.book__control_color');
const bgControls = document.querySelector('.book__control_background');

function toggleNewClass(e, data) {
    e.preventDefault();
    const {checkClass, allClasses, template, attr, activeClass} = data;
    if (!e.target.classList.contains(checkClass)) {
        return;
    }

    const block = e.target.closest('div');
    const buttons = block.querySelectorAll('a');
    [...buttons].forEach(i => {
        if (i === e.target) {
            i.classList.add(activeClass);
        } else {
            i.classList.remove(activeClass);
        }
    });   

    allClasses.forEach(item => book.classList.remove(item));
    if (e.target.dataset[attr]) {
        const newClass = template + e.target.dataset[attr];
        book.classList.add(newClass);
    }
}

// Не работает
// function toggleFont() {

//     let allClasses = ['book_fs-big', 'book_fs-small'];
//     let template = 'book_fs-';
//     let checkClass = 'font-size';
//     let attr = 'size';
//     let counter = 0;

//     const f = (e) => { 
//         let counter = 0;
//         return toggleNewClass(e)}

//     return f;
// }

// function toggleColor() {
//     let allClasses = ['book_color-gray', 'book_color-whitesmoke'];
//     let template = 'book_color-';
//     let checkClass = 'color';
//     let attr = 'color';

//     return function (e) { return toggleNewClass(e) };
// }

fontControls.addEventListener('click', (e) => {
    const data = {
        allClasses: ['book_fs-big', 'book_fs-small'],
        template: 'book_fs-',
        checkClass: 'font-size',
        attr: 'size',
        activeClass: 'font-size_active',
    }

    toggleNewClass(e, data);
});
//fontControls.onClick = toggleFont();

colorControls.addEventListener('click', (e) => {
    const data = {
        allClasses: ['book_color-gray', 'book_color-whitesmoke'],
        template: 'book_color-',
        checkClass: 'color',
        attr: 'color',
        activeClass: 'color_active',
    }

    toggleNewClass(e, data);
});
//colorControls.onClick = toggleFont();

bgControls.addEventListener('click', (e) => {
    const data = {
        allClasses: ['book_bg-gray', 'book_bg-black'],
        template: 'book_bg-',
        checkClass: 'color',
        attr: 'color',
        activeClass: 'color_active',
    }

    toggleNewClass(e, data);
});