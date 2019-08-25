function onReady() {
  //
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', event => {
   event.preventDefault();
   // get the text
    let title = newToDoText.value;
    if(title===null||title===undefined||title===""){
      return
    }
    // create a new li
   let newLi = document.createElement('li');
   newLi.classList.add("mdl-list__item");
  let span=document.createElement("span")
  span.classList.add("mdl-list__item-primary-content")
   // create a new input
   let checkbox = document.createElement('input');

   // set the input's type to checkbox
   checkbox.type = "checkbox";
   // set the title
  span.textContent = title;

  // attach the checkbox to the li
  span.appendChild(checkbox)
  newLi.appendChild(span)
  // attach the li to the ul
  toDoList.appendChild(newLi);
     //empty the input
   newToDoText.value = '';
 });
}


function deleteCheckedToDos() {   // Get the parent UL that contains the to dos 
    var ul = document.getElementById("toDoList");  
    // Get all the list items from the to do list 
    var items = ul.getElementsByTagName("li");  
    // Iterate over the list 
    for (var i = 0; i < items.length; ++i) { 
      //Get all the check box elements from each to-do 
      var checkbox = items[i].childNodes[0].childNodes[1];  
      // If the check box is checked 
      if(checkbox.checked === true) { 
        // Remove the todo from the list 
        ul.removeChild(items[i]); 
      } 
    }
 }
window.onload = function() {
  onReady();
};
