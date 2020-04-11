const signBlock = document.getElementById('signin');
const btn = document.getElementById('signin__btn');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const spanId = document.getElementById('user_id');
const signoutBtn = document.getElementById('signout__btn');

let userId;

checkUserId = () => {
    if (!userId) {
        userId = localStorage.getItem('authHw_userId');
        if (userId) {
            welcome.classList.add('welcome_active');
            spanId.textContent = userId;

            signBlock.classList.remove('signin_active');
            signBlock.classList.add('signin');
        }
    }
}

window.onload = e => {
    signBlock.classList.remove('signin');
    signBlock.classList.add('signin_active');

    checkUserId();
}

form.onsubmit = e => {
    e.preventDefault();

    const url = 'https://netology-slow-rest.herokuapp.com/auth.php';
    xhr = new XMLHttpRequest();
    xhr.open('POST', url);

    const formData = new FormData(form);

    xhr.onreadystatechange = function (e) {
        if (this.readyState === this.DONE && this.status === 200) {

            try {
                const response = JSON.parse(this.responseText);
                if (response.success) {
                    localStorage.setItem('authHw_userId', response.user_id);
                    
                    checkUserId();
                } else {
                    alert('Неверный логин/пароль');
                }
            } catch {
                console.error('error');
            }
        }
    }

    xhr.send(formData);

    form.reset();
}

signoutBtn.onclick = e => {
    if (userId) {
        localStorage.removeItem('authHw_userId');

        location.reload();
    }
}

