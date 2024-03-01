let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = {
        id: new Date().getTime(),
        text: taskInput.value,
        completed: false,
        createdAt: new Date()
    };

    tasks.push(task);
    displayTasks();
    taskInput.value = '';
}

function displayTasks() {
    const pendingTasksContainer = document.getElementById('pendingTasks');
    const completedTasksContainer = document.getElementById('completedTasks');

    pendingTasksContainer.innerHTML = '<h2>Pending Tasks</h2>';
    completedTasksContainer.innerHTML = '<h2>Completed Tasks</h2>';

    tasks.forEach(task => {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task');

        if (task.completed) {
            taskContainer.classList.add('completed');
            completedTasksContainer.appendChild(taskContainer);
        } else {
            pendingTasksContainer.appendChild(taskContainer);
        }

        const taskText = document.createElement('span');
        taskText.textContent = task.text;

        const taskActions = document.createElement('div');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(task.id));

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => toggleTaskStatus(task.id));

        taskActions.appendChild(deleteButton);
        taskActions.appendChild(completeButton);

        taskContainer.appendChild(taskText);
        taskContainer.appendChild(taskActions);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    displayTasks();
}

function toggleTaskStatus(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    displayTasks();
}

displayTasks();
