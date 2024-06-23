$(document).ready(function() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function renderTasks() {
        $('#taskList').empty();
        tasks.forEach((task, index) => {
            $('#taskList').append(`
                <li class="list-group-item">
                    ${task.title}
                    <div class="btn-group">
                        <button class="btn btn-info btn-sm view-task" data-index="${index}" data-toggle="modal" data-target="#viewTaskModal">View</button>
                        <button class="btn btn-secondary btn-sm edit-task" data-index="${index}" data-toggle="modal" data-target="#taskModal">Edit</button>
                        <button class="btn btn-danger btn-sm delete-task" data-index="${index}">Delete</button>
                    </div>
                </li>
            `);
        });
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    $('#taskForm').on('submit', function(event) {
        event.preventDefault();
        const task = {
            title: $('#taskTitle').val(),
            description: $('#taskDescription').val(),
            dueDate: $('#taskDueDate').val()
        };

        const taskId = $('#taskId').val();
        if (taskId) {
            tasks[taskId] = task;
        } else {
            tasks.push(task);
        }
        saveTasks();
        renderTasks();
        $('#taskModal').modal('hide');
    });

    $('#taskModal').on('show.bs.modal', function(event) {
        const button = $(event.relatedTarget);
        const taskId = button.data('index');
        if (taskId !== undefined) {
            const task = tasks[taskId];
            $('#taskId').val(taskId);
            $('#taskTitle').val(task.title);
            $('#taskDescription').val(task.description);
            $('#taskDueDate').val(task.dueDate);
            $('#taskModalLabel').text('Edit Task');
        } else {
            $('#taskId').val('');
            $('#taskTitle').val('');
            $('#taskDescription').val('');
            $('#taskDueDate').val('');
            $('#taskModalLabel').text('New Task');
        }
    });

    $('#viewTaskModal').on('show.bs.modal', function(event) {
        const button = $(event.relatedTarget);
        const taskId = button.data('index');
        const task = tasks[taskId];
        $('#viewTaskTitle').text(task.title);
        $('#viewTaskDescription').text(task.description);
        $('#viewTaskDueDate').text(task.dueDate);
    });

    $('#taskList').on('click', '.delete-task', function() {
        const taskId = $(this).data('index');
        tasks.splice(taskId, 1);
        saveTasks();
        renderTasks();
    });

    renderTasks();
});
