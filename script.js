const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const priorityFilter = document.getElementById('priority-filter');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = input.value.trim();
    if (todoText !== '') {
        const priority = document.getElementById('priority').value;
        const scheduledTime = document.getElementById('scheduled-time').value;
        addTodoItem(todoText, priority, scheduledTime);
        input.value = '';
    }
});

function addTodoItem(text, priority, scheduledTime) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        li.classList.toggle('completed', this.checked);
    });
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(text));
    if (priority === 'urgent') {
        li.style.backgroundColor = '#f8d7da'; // Red background for urgent tasks
    } else {
        li.style.backgroundColor = '#d4edda'; // Green background for normal tasks
    }
    if (scheduledTime !== '') {
        const scheduledDate = new Date(scheduledTime).toLocaleString();
        li.appendChild(document.createElement('br'));
        li.appendChild(document.createTextNode('Scheduled: ' + scheduledDate));
    }
    todoList.appendChild(li);
}

priorityFilter.addEventListener('change', function() {
    const filterValue = this.value;
    const tasks = todoList.querySelectorAll('li');
    tasks.forEach(function(task) {
        if (filterValue === 'all' || (filterValue === 'urgent' && task.style.backgroundColor === 'rgb(248, 215, 218)')) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
});
