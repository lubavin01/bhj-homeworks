const form = document.querySelector('.tasks__control');
const newTaskTemplate = document.createElement('div');
newTaskTemplate.classList.add('task');

const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');


const innerHtml = (text) => {
    return (
    `<div class="task__title">
        ${text}
    </div>
    <a href="#" class="task__remove">&times;</a>`
    );
}

const createTask = (text) => {
    const clonedTask = newTaskTemplate.cloneNode();
    clonedTask.innerHTML = innerHtml(text);
    tasksList.appendChild(clonedTask);    
}

const setCache = () => {
    const tasksArray = [...tasksList.children].map(i => i.children[0].textContent.trim());
    localStorage.setItem('netology_tasksList_tasksArray', JSON.stringify(tasksArray) );
}

window.onload = () => {
    try {
        const tasksArray = JSON.parse(localStorage.getItem('netology_tasksList_tasksArray') );
        if ( Array.isArray(tasksArray) ) {
            tasksArray.forEach(i => createTask(i) );            
        }

    } catch {}  
    
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    createTask(taskInput.value);

    setCache();   

    e.target.reset();
});

tasksList.addEventListener('click', (e) => {
    if (!e.target.matches('.task__remove')) return;

    tasksList.removeChild(e.target.parentElement);

    setCache()
})