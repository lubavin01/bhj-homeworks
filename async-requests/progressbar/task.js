const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.getAttribute('action'));     

    xhr.upload.onprogress = e => {        
        progress.value = e.loaded/e.total;
    }

    xhr.upload.onload = e => {
        console.log('finished');
        
    }


    xhr.send(formData);
});