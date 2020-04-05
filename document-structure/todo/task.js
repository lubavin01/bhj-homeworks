const form = document.querySelector('.tasks__control');
const newTaskTemplate = document.createElement('div');
newTaskTemplate.classList.add('task');

const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');


const innerHtml = (text) => {
    return `<div class="task__title">
        ${text}
    </div>
    <a href="#" class="task__remove">&times;</a>`;
}

const createTask = (text) => {
    const clonedTask = newTaskTemplate.cloneNode();    
    clonedTask.innerHTML = innerHtml(text); 
    tasksList.appendChild(clonedTask);

    localStorage.setItem('netology_tasksList_innerHTML', tasksList.innerHTML);
} 

window.onload = () => {
    const cache = localStorage.getItem('netology_tasksList_innerHTML');
    if (cache) {
        tasksList.innerHTML = cache;
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    createTask(taskInput.value) ;

    e.target.reset();    
} );

tasksList.addEventListener('click', (e) => {
    if (!e.target.matches('.task__remove')) return;

    tasksList.removeChild(e.target.parentElement);

    localStorage.setItem('netology_tasksList_innerHTML', tasksList.innerHTML);
})