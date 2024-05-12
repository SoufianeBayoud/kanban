// document.addEventListener('DOMContentLoaded', function() {
//     // Retrieve tasks from localStorage when the page loads
//     var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
//     // Loop through tasks and dynamically add them to the respective columns
//     tasks.forEach(function(task) {
//         addTaskToColumn(task);
//     });

//     //Viens du form
//     var taskForm = document.getElementById('add-task-form');
//     taskForm.addEventListener('submit', function(e) {
//         e.preventDefault();
//         var title = document.getElementById('title').value;
//         var description = document.getElementById('description').value;
//         var deadline = document.getElementById('deadline').value;
//         var category = document.getElementById('category').value;
//         var subject = document.getElementById('subject').value;
//         var status = "todo"

//         // Check if all fields are filled
//         if (title && description) {
//             taskForm.reset();
//             console.log('Task');
//             // Save task to localStorage
//             saveTaskToLocalStorage(title, description, deadline, category, subject, status);
//             // Dynamically add the new task to the todo-column
//             addTaskToColumn({ title, description, deadline, category, subject, status });
//         } 

//     });

//     document.querySelectorAll('.task').forEach(function(taskDiv) {
//         taskDiv.addEventListener('click', function() {
//             displayTaskDetails(taskDiv);
//         });
//     });
    
    
//     // test.addEventListener('click', function() {
//     //     console.log('djdjdjd');
//     // });
// });

// function addTaskToColumn(task) {
//     var column;
//     if (task.status === "todo") {
//         column = document.querySelector('.todo-column');
//     } else if (task.status === "progress") {
//         column = document.querySelector('.progress-column');
//     } else if (task.status === "done") {
//         column = document.querySelector('.done-column');
//     }

//     if (column) {
//         var taskDiv = document.createElement('div');
//         taskDiv.classList.add('task');
//         taskDiv.textContent = task.title;
//         taskDiv.dataset.task = JSON.stringify(task); 
//         column.appendChild(taskDiv);
//     } else {
//         console.error("Column element not found!");
//     }
// }
// function displayTaskDetails(taskDiv) {
//     var taskData = JSON.parse(taskDiv.dataset.task); // Retrieve task data from data attribute
//     // Here you can create a display card or modal to show task details
//     // For example:
//     alert("Title: " + taskData.title + "\nCategory: " + taskData.category + "\nDeadline: " + taskData.deadline);
// }


// function saveTaskToLocalStorage(title, description, deadline, category, subject, status) {
//     var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     tasks.push({ title, description, deadline, category, subject, status });
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve tasks from localStorage when the page loads
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    // Loop through tasks and dynamically add them to the respective columns
    tasks.forEach(function(task) {
        addTaskToColumn(task);
    });

    // Add event listener to each task div to display details on click
    document.querySelectorAll('.task').forEach(function(taskDiv) {
        taskDiv.addEventListener('click', function() {
            displayTaskDetails(taskDiv.dataset.task);
        });
    });

    var taskForm = document.getElementById('add-task-form');
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var title = document.getElementById('title').value;
        var description = document.getElementById('description').value;
        var deadline = document.getElementById('deadline').value;
        var category = document.getElementById('category').value;
        var subject = document.getElementById('subject').value;
        var status = "todo"

        // Check if all fields are filled
        if (title && description) {
            taskForm.reset();
            console.log('Task');
            // Save task to localStorage
            saveTaskToLocalStorage(title, description, deadline, category, subject, status);
            // Dynamically add the new task to the todo-column
            addTaskToColumn({ title, description, deadline, category, subject, status });
        } 

    });

});

function addTaskToColumn(task) {
    var column;
    if (task.status === "todo") {
        column = document.querySelector('.todo-column');
    } else if (task.status === "progress") {
        column = document.querySelector('.progress-column');
    } else if (task.status === "done") {
        column = document.querySelector('.done-column');
    }

    if (column) {
        var taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.textContent = task.title;
        taskDiv.dataset.task = JSON.stringify(task); // Store task data as a data attribute
        column.appendChild(taskDiv);
    } else {
        console.error("Column element not found!");
    }
}

function displayTaskDetails(taskData) {
    // Store task data in local storage to retrieve on the new page
    localStorage.setItem('selectedTask', taskData);
    // Redirect to the new HTML page to display task details
    window.location.href = 'displaycard.html';
}

function saveTaskToLocalStorage(title, description, deadline, category, subject, status) {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ title, description, deadline, category, subject, status });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
