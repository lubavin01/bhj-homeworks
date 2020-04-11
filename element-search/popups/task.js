const modal = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
modal.classList.add(`modal_active`);

onClickButton = function (event) {

    if (!event.target.matches('.modal__close')) {
        return;
    }

    const popup = event.target.closest('div.modal');
    popup.classList.remove(`modal_active`);

    if (event.target.matches('.show-success')) {
        modalSuccess.classList.add(`modal_active`);
    }
}

modal.onclick = onClickButton;
modalSuccess.onclick = onClickButton;

