const textArea = document.getElementById('editor');
const clearButton = document.getElementById('clear-button');

window.onload = e => {
    textArea.value = localStorage.getItem('editor');
}

textArea.oninput = e => {
    localStorage.setItem('editor', e.target.value);
};

clearButton.onclick = e => {
    textArea.value = '';
    localStorage.setItem('editor', textArea.value);
}