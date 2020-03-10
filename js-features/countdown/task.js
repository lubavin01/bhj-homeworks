const transformDate = date => {
    let hours = date.getUTCHours().toString();
    hours = hours.split('').length === 1 ?  '0' + hours : hours;

    let minutes = date.getUTCMinutes().toString();
    minutes = minutes.split('').length === 1 ?  '0' + minutes : minutes;

    let seconds = date.getUTCSeconds().toString();
    seconds = seconds.split('').length === 1 ?  '0'+ seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
}

const Countdown = function (elem) {

    timeLeft.setSeconds(timeLeft.getSeconds() - 1);

    elem.textContent = transformDate(timeLeft);

    if (+timeLeft === 0) {
        alert('You won');
        
        clearInterval(interval);

        location.assign(`https://yandex.ru/collections/card/5a75ae18faf2a4b6dfa94ade/`);
    }
}

const elem = document.getElementById('timer');

let timeLeft = new Date(parseInt(elem.textContent)*1000);

elem.textContent = transformDate(timeLeft);

const interval = setInterval(Countdown, 1000, elem);



