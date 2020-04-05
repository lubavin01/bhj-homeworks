const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

const tooltipParents = [...document.querySelectorAll('.has-tooltip')];
const tooltipElements = [];

const removeActive = (i) => {
    if (i.classList.contains('tooltip_active')) {
        i.classList.remove('tooltip_active');
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

        tooltipElements.forEach(removeActive);

        const rect = e.target.getBoundingClientRect();
        const currentTooltip = e.target.children[0];        
        currentTooltip.classList.toggle('tooltip_active');

        currentTooltip.dataset.position = {};
        currentTooltip.dataset.position.left = rect.left;
        currentTooltip.dataset.position.right = rect.right;
        
        currentTooltip.style.top = `${rect.bottom + 2}px`; 
        currentTooltip.style.left = `${rect.left + 20}px`; 
    });
});

document.addEventListener('scroll', () => {
    tooltipElements.forEach(removeActive);
});



