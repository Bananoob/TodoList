let addNewTask = document.querySelector('#addNewTask'),
    newTask = document.querySelector('#newTask'),
    tasks = document.querySelector('#tasks')

// Display the input field
addNewTask.addEventListener("click", () => {
    addNewTask.style.display = "none"
    newTask.style.display = "flex";
    newTask.focus()
})

// Add the task
let taskId = 1;
if (newTask.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && newTask.value !== "") {
        // Variables
        let container = document.createElement("section")
        let task = document.createElement("div");
        let taskP = document.createElement('p');

        // Proprities
        task.id = `div-${taskId++}`;
        task.draggable = true;
        taskP.innerHTML = newTask.value;

        // Append
        tasks.append(container)
        container.append(task)
        task.append(taskP)

        // Functions
        drag(task)
        removeTask(task)

        newTask.style.display = "none"
        newTask.value = ""
        addNewTask.style.display = "flex"
    } else if (e.key === "Escape") {
        newTask.style.display = "none"
        newTask.value = ""
        addNewTask.style.display = "flex"
    }
}));

function drag(item) {
    item.addEventListener("dragstart", () => {
        item.classList.add("dragging")
    })

    item.addEventListener("dragend", () => {
        item.classList.remove("dragging")
    })

    document.querySelectorAll('#tasks section').forEach(container => {
        container.addEventListener("dragover", event => {
            event.preventDefault();
            const draggable = document.querySelector('.dragging')
            container.appendChild(draggable)
        })
    })
}

function removeTask(task) {
    task.addEventListener("contextmenu", event => {
        task.remove();
        event.preventDefault()
    })
}