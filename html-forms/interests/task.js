const interests = document.querySelectorAll('.interest__check');
const main = document.querySelector('.interests_main');


const goUp = (eTarget, goDown = true) => {
    const rootUl = eTarget.closest('ul.interests');
    if (rootUl) {
        const rootNode = rootUl.previousElementSibling.firstElementChild;

        const checked = rootUl.querySelectorAll('.interest__check:checked');
        const inputs = rootUl.querySelectorAll('.interest__check');

        rootNode.checked = checked.length === inputs.length;
        if (!rootNode.checked && checked.length) {
            rootNode.indeterminate = true;
        }
        else {
            rootNode.indeterminate = false;
        }

        goUp(rootNode, false);
    }



    if (goDown) {
        const rootLi = eTarget.closest('ul>li');
        const childInputs = rootLi.querySelectorAll('ul .interest__check');
        [...childInputs].forEach(element => {
            element.checked = eTarget.checked;
        });
    }


    
}



main.addEventListener('click', (e) => goUp(e.target));