document.addEventListener("DOMContentLoaded", function () {
    const addTaskBtn = document.querySelector(".add-task");
    const addBtn = document.querySelector(".add");
    const removeBtn = document.querySelector(".remove");
    const doneBtn = document.querySelector(".Done");
    const logoutBtn = document.querySelector(".logout");
    const firstBox = document.querySelector(".first-box");
    const secondBox = document.querySelector(".second-box");
    const inputField = document.querySelector(".first-box input");
    const taskList = document.querySelector(".task-list");
    const editTextArea = document.querySelector(".second-box textarea");
    let currentEditTask = null;

    // Identify current page
    const isCompletedPage = window.location.pathname.includes("index4.html");
    const storageKey = isCompletedPage ? "completedTasks" : "laterTasks";

    // Load tasks from localStorage
    function loadTasks() {
        taskList.innerHTML = "";
        const tasks = JSON.parse(localStorage.getItem(storageKey)) || [];
        tasks.forEach(task => addTaskToDOM(task.text, task.completed));
    }

    // Save tasks to localStorage
    function saveTasks() {
        const tasks = [...taskList.children].map(li => ({
            text: li.querySelector(".task-text").textContent,
            completed: li.classList.contains("completed")
        }));
        localStorage.setItem(storageKey, JSON.stringify(tasks));
    }

    // Add task to the DOM
    function addTaskToDOM(text, completed) {
        const li = document.createElement("li");
        li.classList.toggle("completed", completed);
        li.style.backgroundColor = completed ? "lightblue" : "rgba(255, 255, 255, 0.2)";
        li.innerHTML = `
            <span class="task-text">${text}</span>
            <span class="star ${completed ? 'green' : ''}">${completed ? '★' : '☆'}</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(li);
        attachStarClickEvent(li.querySelector(".star"));
        attachEditClickEvent(li.querySelector(".edit"));
        attachDeleteClickEvent(li.querySelector(".delete"));
    }

    // Add new task
    addBtn.addEventListener("click", function () {
        if (inputField.value.trim() !== "") {
            addTaskToDOM(inputField.value, false);
            inputField.value = "";
            firstBox.style.display = "none";
            saveTasks();
        }
    });

    // Remove last task
    removeBtn.addEventListener("click", function () {
        if (taskList.lastChild) {
            taskList.removeChild(taskList.lastChild);
            saveTasks();
        }
    });

    // Star click to move task
    function attachStarClickEvent(star) {
        star.addEventListener("click", function () {
            const taskItem = star.parentElement;
            const taskText = taskItem.querySelector(".task-text").textContent;
            const moveToStorage = star.classList.contains("green") ? "laterTasks" : "completedTasks";
            const removeFromStorage = moveToStorage === "completedTasks" ? "laterTasks" : "completedTasks";

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

            moveTask(taskText, moveToStorage, removeFromStorage);
        });
    }

    // Move task between storages
    function moveTask(taskText, addToStorage, removeFromStorage) {
        let addList = JSON.parse(localStorage.getItem(addToStorage)) || [];
        let removeList = JSON.parse(localStorage.getItem(removeFromStorage)) || [];

        // Remove task from previous list
        removeList = removeList.filter(task => task.text !== taskText);
        localStorage.setItem(removeFromStorage, JSON.stringify(removeList));

        // Add task to new list
        if (!addList.some(task => task.text === taskText)) {
            addList.push({ text: taskText, completed: addToStorage === "completedTasks" });
            localStorage.setItem(addToStorage, JSON.stringify(addList));
        }

        window.location.href = addToStorage === "completedTasks" ? "index4.html" : "index5.html";
    }

    // Edit task
    function attachEditClickEvent(editBtn) {
        editBtn.addEventListener("click", function () {
            currentEditTask = editBtn.parentElement;
            editTextArea.value = currentEditTask.querySelector(".task-text").textContent;
            secondBox.style.display = "block";
        });
    }

    // Save edited task
    doneBtn.addEventListener("click", function () {
        if (currentEditTask) {
            currentEditTask.querySelector(".task-text").textContent = editTextArea.value;
            secondBox.style.display = "none";
            saveTasks();
        }
    });

    // Delete task
    function attachDeleteClickEvent(deleteBtn) {
        deleteBtn.addEventListener("click", function () {
            const taskItem = deleteBtn.parentElement;
            taskItem.remove();
            saveTasks();
        });
    }

    // Logout
    logoutBtn.addEventListener("click", function () {
        window.location.href = "index1.html";
    });

    // Load tasks on page load
    loadTasks();
});
