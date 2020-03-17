const tabBlock = document.querySelector('.tab__navigation');
const tabItems = [...tabBlock.children];

const contentBlock = document.querySelector('.tab__contents');
const contentItems = [...contentBlock.querySelectorAll('.tab__content')];

tabBlock.addEventListener('click', e => {
    if (!e.target.classList.contains('tab')) { return }

    const oldIdxActive = tabItems.findIndex(i => i.classList.contains('tab_active'));
    const newIdxActive = tabItems.findIndex(i => i === e.target);
    
    if (e.target !== tabItems[oldIdxActive]) {
        tabItems[oldIdxActive].classList.remove('tab_active');
        e.target.classList.add('tab_active');

        contentItems[oldIdxActive].classList.remove('tab__content_active');
        contentItems[newIdxActive].classList.add('tab__content_active');
    }
});