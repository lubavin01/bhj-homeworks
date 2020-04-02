const activeButton = document.querySelector('.chat-widget__side-text');
const chatWidget = document.querySelector('.chat-widget');

const input = document.getElementById('chat-widget__input');
const chatMessages = document.getElementById('chat-widget__messages');
const cont = document.querySelector('.chat-widget__messages-container');

const randomPhrases = ['hello', 'ur sure?', 'im busy', 'please ask me later'];

let lastUpdate;

const getRandomPhrase = () => {
    const idx = Math.floor(Math.random() * randomPhrases.length);
    return randomPhrases[idx];
}

const getFormattedDate = () => {
    const time = new Date();

    let hh = time.getHours();
    hh = (hh < 10 ? '0' + hh : hh);

    let mm = time.getMinutes();
    mm = (mm < 10 ? '0' + mm : mm);

    return `${hh}:${mm}`;
}

activeButton.addEventListener('click', () => { chatWidget.classList.toggle('chat-widget_active') });
input.addEventListener('change', (e) => {
    const text = e.target.value;
    if (!e.target.value.trim().length) {
        return;
    }


    chatMessages.innerHTML +=
        `<div class="message message_client">
            <div class="message__time">${getFormattedDate()}</div>
            <div class="message__text">${text}</div>
        </div >`;

    chatMessages.innerHTML +=
        `<div class="message">
            <div class="message__time">${getFormattedDate()}</div>
            <div class="message__text">${getRandomPhrase()}</div>
        </div >`;

    lastUpdate = new Date();

    cont.scrollTop = cont.scrollHeight;

    e.target.value = '';
});

const f = () => {
    const date = new Date();

    if (lastUpdate && date - lastUpdate > 30000) {

        chatMessages.innerHTML +=
            `<div class="message">
            <div class="message__time">${getFormattedDate()}</div>
            <div class="message__text">Are you here?</div>
        </div >`;

        lastUpdate = new Date();

        cont.scrollTop = cont.scrollHeight;
        }
}

setInterval(f, 1000);

