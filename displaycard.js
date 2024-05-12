document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the selected task data from local storage
    var selectedTask = JSON.parse(localStorage.getItem('selectedTask'));
    
    // Check if task data exists
    if (selectedTask) {
        displayTaskDetails(selectedTask);
    } else {
        // If no task data found, display a message or redirect to another page
        // For example:
        window.location.href = 'index.html'; // Redirect to index page
        // Or display a message:
        // var taskDetailsDiv = document.getElementById('task-details');
        // taskDetailsDiv.innerHTML = '<p>No task details found.</p>';
    }
});

function displayTaskDetails(task) {
    var taskDetailsDiv = document.getElementById('task-details');
    taskDetailsDiv.innerHTML = `
        <h2>${task.title}</h2>
        <p><strong>Category:</strong> ${task.category}</p>
        <p><strong>Deadline:</strong> ${task.description}</p>
        <p><strong>Deadline:</strong> ${task.subject}</p>
        <p><strong>Deadline:</strong> ${task.kanbancategorie}</p>
        <p><strong>Deadline:</strong> ${task.deadline}</p>

        <!-- Add more task details as needed -->
    `;
}
