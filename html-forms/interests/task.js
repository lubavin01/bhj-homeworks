const interests = document.querySelectorAll('.interest__check');
const main = document.querySelector('.interests_main');

main.addEventListener('click', (e) => {

    if (e.target.tagName !== 'INPUT') {return};

    console.log(e.target);
    

    

});