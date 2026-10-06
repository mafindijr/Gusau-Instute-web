const  form = document.querySelector('#todoForm');

const input = document.querySelector('#todoInput');

const todoList = document.querySelector('#todoList');


form.addEventListener('submit', (event) => {

    event.preventDefault();

    const taskText = input.value.trim();

    if(taskText === "") {
        return;
    }

    // create list item
    const li = document.createElement('li');

    li.textContent = taskText;

    todoList.append(li);

    input.value = "";

    li.addEventListener('click', () => {
        li.classList.toggle("completed");
    })

    // create a delete button
    const deleteButton = document.createElement('button');

    deleteButton.textContent = "Delete";

    deleteButton.classList.add('delete-btn');

    li.append(deleteButton);

    deleteButton.addEventListener('click', () => {
        li.remove();
    });


});