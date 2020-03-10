const deadSpan = document.getElementById('dead');
const lostSpan = document.getElementById('lost');

const container = document.querySelector('.hole-game');

container.addEventListener('click', event => {

    if (!event.target.id.includes('hole')) {
        return;
    }

    if (event.target.className.includes('hole_has-mole')) {
        deadSpan.textContent++;
    } else {
        lostSpan.textContent++;
    }

    if (parseInt(lostSpan.textContent) >= 5) {
        alert('You lose');

        deadSpan.textContent = 0;
        lostSpan.textContent = 0;
    };

    if (parseInt(deadSpan.textContent)  >= 10) {
        alert('You won. Congrats!');

        deadSpan.textContent = 0;
        lostSpan.textContent = 0;
    };



});