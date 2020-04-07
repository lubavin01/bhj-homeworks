const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
let pollId;

pollAnswers.addEventListener('click', (e) => {
    if (!e.target.matches('.poll__answer')) return;


    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function () {
        if (this.readyState === this.DONE && this.status === 200) {
            const response = JSON.parse(this.responseText);
            let innerHTML = '';
            response.stat.forEach(i => {
                innerHTML += `<div class="poll__result"><b>${i.answer}</b>: ${i.votes} голосов</div>`
            });
            
            pollTitle.textContent = 'Результаты:'
            pollAnswers.innerHTML = innerHTML;
        }

    }

    xhr.send(`vote=${pollId}&answer=${e.target.dataset.answerid}`);


    alert('Ваш голос засчитан');
});

window.onload = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

    xhr.onreadystatechange = function () {
        if (this.readyState === this.DONE && this.status === 200) {
            const response = JSON.parse(this.responseText);

            pollTitle.textContent = response.data.title;
            pollId = response.id;

            let innerHTMLAnswers = '';
            const answers = response.data.answers;
            answers.forEach((item, idx) => {
                innerHTMLAnswers +=
                    `<button class="poll__answer" data-answerId="${idx}">
                        ${item}
                    </button>
                    `;
            });

            pollAnswers.innerHTML = innerHTMLAnswers;
        }
    }

    xhr.send();
}