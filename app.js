function onReady() {
let id = 0;
let toDos = [];
const addToDoForm = document.getElementById('addToDoForm');

/**
* Delete the list item that the Delete Button is in.
* @param {HTMLButtonElement} buttonElement
*/
function deleteCheckedToDos(buttonElement) {
let liElement = buttonElement.parentNode.parentNode.parentNode;
var liId = parseInt(liElement.id);
toDos = toDos.filter(function(toDo) {
return !(toDo.todoId === liId
&& isCheckBoxClicked(buttonElement.parentElement.parentElement.childNodes[1]));
});

id = id - 1;
// Once the appropriate elements have been deleted, render the UI
renderTheUI();
}

/**
* Check to see if the input element checkbox is checked.
* @param {HTMLInputElement} inputElement
*/
function isCheckBoxClicked(inputElement) {
return inputElement.checked === true;
}

/**
* Create a new ToDo from the text in the input element
*/
function createNewToDo() {
const newToDoText = document.getElementById('newToDoText');

// Guard clause to ensure that there is a value in the input element.
if (!newToDoText.value) {
return;
}

toDos.push({
title: newToDoText.value,
complete: false,
todoId:id,
});

newToDoText.value = '';
id=id+1;

renderTheUI();
}

/**
* Render the UI
*/
function renderTheUI() {
const toDoList = document.getElementById('toDoList');

toDoList.textContent = '';

toDos.forEach(function(toDo) {
//created new list and contents for LI
let newLi = document.createElement('li');
let span=document.createElement("span");
let checkbox = document.createElement('input');
let deleteButton = document.createElement("button");
let deleteButtonIcon=document.createElement("i");

//add the MDL classes to each created element
newLi.classList.add("mdl-list__item");
span.classList.add("mdl-list__item-primary-content")
deleteButton.classList.add("mdl-button", "mdl-js-button", "mdl-button--fab");
deleteButtonIcon.classList.add("material-icons");

// set li childNodes values
checkbox.type = "checkbox";
span.textContent = toDo.title;
deleteButtonIcon.textContent = "remove";
newLi.id=toDo.todoId;

//create eventListener
deleteButton.addEventListener('click', event=> {
let buttonElement = event.target;
deleteCheckedToDos(buttonElement);
});

// adding all elements to to-do list ul
deleteButton.appendChild(deleteButtonIcon);
span.appendChild(checkbox);
span.appendChild(deleteButton);
newLi.appendChild(span);
toDoList.appendChild(newLi);
});
}

// Add an event listener to the submit button in the form.
addToDoForm.addEventListener('submit', event => {
event.preventDefault();
createNewToDo();
});

renderTheUI();
}

window.onload = function() {
onReady();
};
