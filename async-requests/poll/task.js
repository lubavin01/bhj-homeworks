window.onload = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

    xhr.onreadystatechange = function() {
        if (this.readyState === this.DONE && this.status === 200) {
            console.log(this.responseText);            
        }
    }

    xhr.send();
}