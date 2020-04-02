'use strict';

const book = document.getElementById('book');
const fontControls = document.querySelector('.book__control_font-size');
const colorControls = document.querySelector('.book__control_color');
const bgControls = document.querySelector('.book__control_background');

function toggleNewClass(e) {
    e.preventDefault();
    if (!e.target.classList.contains(checkClass)) {
        return;
    }

    allClasses.forEach(item => book.classList.remove(item));
    if (e.target.dataset[attr]) {
        const newClass = template + e.target.dataset[attr];
        book.classList.add(newClass);
    }
}

function toggleFont() {

    let allClasses = ['book_fs-big', 'book_fs-small'];
    let template = 'book_fs-';
    let checkClass = 'font-size';
    let attr = 'size';
    let counter = 0;

    return (e) => { 
        let counter = 0;
        return toggleNewClass(e)};
}

function toggleColor() {
    let allClasses = ['book_color-gray', 'book_color-whitesmoke'];
    let template = 'book_color-';
    let checkClass = 'color';
    let attr = 'color';

    return function (e) { return toggleNewClass(e) };
}

fontControls.addEventListener('click', toggleFont());
//fontControls.onClick = toggleFont();

colorControls.addEventListener('click', toggleColor());
//colorControls.onClick = toggleFont();






// fontControls.addEventListener('click', (e) => {
//     const allClasses = ['book_fs-big', 'book_fs-small'];
//     const template = 'book_fs-';
//     const checkClass = 'font-size';
//     const attr = 'size';

//     const toggle = (e) => {return toggleNewClass(e)}
//     return toggle;
// });

// colorControls.addEventListener('click', (e) => {
//     const allClasses = ['book_color-gray', 'book_color-whitesmoke'];
//     const template = 'book_color-';
//     const checkClass = 'color';
//     const attr = 'color';

//     toggleNewClass(e);
// });

// bgControls.addEventListener('click', (e)=> {
//     const allClasses = ['book_bg-gray', 'book_bg-white'];
//     const template = 'bbook_bg-';
//     const checkClass = 'color';
//     const attr = 'color';

//     toggleNewClass(e);    
// });

