document.addEventListener("DOMContentLoaded", function () {
    const addTaskBtn = document.querySelector(".add-task");
    const addBtn = document.querySelector(".add");
    const removeBtn = document.querySelector(".remove");
    const editBtns = document.querySelectorAll(".edit");
    const doneBtn = document.querySelector(".Done");
    const logoutBtn = document.querySelector(".logout");
    const firstBox = document.querySelector(".first-box");
    const secondBox = document.querySelector(".second-box");
    const inputField = document.querySelector(".first-box input");
    const taskList = document.querySelector(".task-list");
    const editTextArea = document.querySelector(".second-box textarea");
    const totalTasksCount = document.getElementById("totalTasks");
    const completedTasksCount = document.getElementById("completedTasks");
    const laterTasksCount = document.getElementById("laterTasks");
    let currentEditTask = null;

    // Function to update task counters
    function updateTaskCounters() {
        const totalTasks = taskList.children.length;
        const completedTasks = taskList.querySelectorAll(".completed").length;
        const laterTasks = taskList.querySelectorAll("li:not(.completed)").length;

        totalTasksCount.textContent = totalTasks;
        completedTasksCount.textContent = completedTasks;
        laterTasksCount.textContent = laterTasks;
    }

    // Show first box when +Add is clicked
    addTaskBtn.addEventListener("click", function () {
        firstBox.style.display = "block";
    });

    // Add new task
    addBtn.addEventListener("click", function () {
        if (inputField.value.trim() !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span class="task-text">${inputField.value}</span>
                <span class="star">☆</span>
                <button class="edit">Edit</button>
            `;
            taskList.appendChild(li);
            inputField.value = "";
            firstBox.style.display = "none";
            attachStarClickEvent(li.querySelector(".star"));
            attachEditClickEvent(li.querySelector(".edit"));
            updateTaskCounters(); // Update counters after adding a task
        }
    });

    // Remove last task
    removeBtn.addEventListener("click", function () {
        if (taskList.lastChild) {
            taskList.removeChild(taskList.lastChild);
            updateTaskCounters(); // Update counters after removing a task
        }
    });

    // Attach click event to stars (mark task as completed or not)
    function attachStarClickEvent(star) {
        star.addEventListener("click", function () {
            const taskItem = star.parentElement;
            if (star.classList.contains("green")) {
                star.classList.remove("green");
                star.textContent = "☆";
                taskItem.classList.remove("completed");
                taskItem.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            } else {
                star.classList.add("green");
                star.textContent = "★";
                taskItem.classList.add("completed");
                taskItem.style.backgroundColor = "lightblue";
            }
            updateTaskCounters(); // Update counters when task is marked as completed/incomplete
        });
    }

    // Attach click event to edit buttons
    function attachEditClickEvent(editBtn) {
        editBtn.addEventListener("click", function () {
            currentEditTask = editBtn.parentElement;
            editTextArea.value = currentEditTask.querySelector(".task-text").textContent;
            secondBox.style.display = "block";
        });
    }

    // Edit task
    doneBtn.addEventListener("click", function () {
        if (currentEditTask) {
            currentEditTask.querySelector(".task-text").textContent = editTextArea.value;
            secondBox.style.display = "none";
        }
    });

    // Logout button event
    logoutBtn.addEventListener("click", function () {
        window.location.href = "index1.html";
    });

    // Initialize existing stars and edit buttons
    document.querySelectorAll(".star").forEach(attachStarClickEvent);
    document.querySelectorAll(".edit").forEach(attachEditClickEvent);

    // Initial task counters update
    updateTaskCounters();
});
