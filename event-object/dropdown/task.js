const div = document.querySelector(".dropdown");
const list = document.querySelector(".dropdown__list");
const dropdownValue = document.querySelector(".dropdown__value");

div.addEventListener('click', function(e) {

    e.preventDefault();

    if (e.target.classList.contains('dropdown__link')) {
        dropdownValue.textContent = e.target.innerText;
    }  

    if (list.classList.contains('dropdown__list_active') ) {
        list.classList.remove('dropdown__list_active')
    } else {
        list.classList.add('dropdown__list_active')
    }      

});