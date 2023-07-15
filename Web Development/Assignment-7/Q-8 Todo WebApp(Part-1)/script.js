let submit = document.getElementById("button");
let currentID = 1; // Variable to track the current unique ID for new cards

// Function to save the to-do items in local storage
const saveToDos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

// Function to retrieve the to-do items from local storage
const getToDos = () => {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
};

submit.addEventListener("click", () => {
    let input = document.getElementById("note").value;

    let div = document.createElement("div");
    div.classList.add("container");

    let pTag = document.createElement("p");
    pTag.classList.add("my-note");
    pTag.textContent = input;
    div.appendChild(pTag);

    let status = document.createElement("p");
    status.textContent = "Status: Pending";
    div.appendChild(status);

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    div.appendChild(removeBtn);

    let markCompleteBtn = document.createElement("button");
    markCompleteBtn.classList.add("mrk")
    markCompleteBtn.textContent = "Mark Completed";
    div.appendChild(markCompleteBtn);

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit Note";
    div.appendChild(editBtn);

    let container = document.getElementById("todo-container");
    container.appendChild(div);

    document.getElementById("note").value = "";

    // Add the new item to the existing to-do items and save in local storage
    const todos = getToDos();
    todos.push({ id: cardID, note: input });
    saveToDos(todos);
});

// Retrieve the saved to-do items from local storage on page load
window.addEventListener("DOMContentLoaded", () => {
    const todos = getToDos();
    todos.forEach((todo) => {
        let div = document.createElement("div");
        div.classList.add("container");

        let pTag = document.createElement("p");
        pTag.classList.add("my-note");
        pTag.textContent = todo.note;
        div.appendChild(pTag);

        let status = document.createElement("p");
        status.textContent = "Status: Pending";
        div.appendChild(status);

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        div.appendChild(removeBtn);

        let markCompleteBtn = document.createElement("button");
        markCompleteBtn.classList.add("mrk")
        markCompleteBtn.textContent = "Mark Completed";
        div.appendChild(markCompleteBtn);

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit Note";
        div.appendChild(editBtn);

        let container = document.getElementById("todo-container");
        container.appendChild(div);
    });
});