const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

const tooltipParents = [...document.querySelectorAll('.has-tooltip')];
const tooltipElements = [];

function removeActive(item, target) {

    const parent = item.closest('a.has-tooltip');

    if (parent === target) {
        item.classList.toggle('tooltip_active');
    } else if (item.classList.contains('tooltip_active')) {
        item.classList.remove('tooltip_active');
    };
}

tooltipParents.forEach(i => {
    tooltipClone = tooltip.cloneNode();
    tooltipClone.innerText = i.getAttribute('title');
    i.appendChild(tooltipClone);

    tooltipElements.push(tooltipClone);

    i.addEventListener('click', e => {
        e.preventDefault();
        if (!e.target.classList.contains('has-tooltip')) return;

        tooltipElements.forEach(i => removeActive(i, e.target));

        const rect = e.target.getBoundingClientRect();
        const currentTooltip = e.target.children[0];

        let {left,  top} = rect;

        const position = i.dataset.position;
        if (position === 'left') {            
            left = rect.left - 30;

        } else if (position === 'right') {
            left = rect.right + 2;

        } else if (position === 'top') {
            top = rect.top - 30;

        } else if (position === 'bottom') {
            top = rect.bottom + 2;

        } else {
            top = rect.bottom + 2;
            left = rect.left + 20;
        }

        currentTooltip.style.top    = `${top}px`;
        currentTooltip.style.left   = `${left}px`;        
    });
});

document.addEventListener('scroll', () => {
    tooltipElements.forEach(removeActive);
});



