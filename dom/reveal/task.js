const revealBlocks = document.querySelectorAll('.reveal');

const renderItem = (item) => {
    const rect = item.getBoundingClientRect();

    if (rect.top <= window.innerHeight
        && rect.top + rect.height >= 0) {
            item.classList.add('reveal_active');
    } else {
        item.classList.remove('reveal_active');
    }
}


document.onscroll = () => {
    revealBlocks.forEach(item => renderItem(item));    
}