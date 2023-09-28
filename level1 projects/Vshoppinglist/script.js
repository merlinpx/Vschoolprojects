
const input = document.getElementById('todos');

//const todoList = input.value;
const button = document.getElementById('add-button');

const list= document.getElementById('list')
//const delBtn = document.getElementById('delete-button');
//const editBtn = document.getElementById('edit-button');
//var delBtn = document.createElement("button");
//delBtn.textContent = "Delete"
//var editBtn = document.createElement("button");
//editBtn.textContent="Edit"

function addTodo(){
    const todoList = input.value;
    //console.log(input.value);
    var div = document.createElement("div");
    div.classList.add("task-item")
    var li = document.createElement("li");
var delBtn = document.createElement("button");
var Delete = '<i style= "font-size:34px">&#128465</i> '
delBtn.innerHTML = Delete


delBtn.addEventListener("click", event => {
    div.remove()
    })
// delBtn.textContent = "Delete"
var editBtn = document.createElement("button");
// editBtn.textContent="Edit"
var edit = '<i style="font-size:34px">&#9997</i>'
editBtn.innerHTML = edit
editBtn.addEventListener("click",() =>{
   var newInput = document.createElement("input")
   newInput.style.fontSize = "34px";
   newInput.value = todoList;
   li.replaceWith(newInput)
var saveBtn = document.createElement("button");
var save = '<i style="font-size:34px">&#10003</i>'
saveBtn.innerHTML = save
   // saveBtn.textContent ="Save";

saveBtn.addEventListener("click",() =>{ 
  li.textContent = newInput.value
    newInput.replaceWith(li)
    div.appendChild(editBtn);
    saveBtn.remove();
 })
   div.appendChild(saveBtn);
   editBtn.remove();
// var exitBtn = document.createElement("button");  
//   exitBtn.addEventListener("click",() =>{    
//      newInput.replaceWith(li)


// //    delBtn.remove();
  
//})
})

li.textContent = todoList;
div.appendChild(li);
div.appendChild(editBtn);
div.appendChild(delBtn);
list.appendChild(div)
 }

button.addEventListener("click",addTodo)


//function deleTe() {
   // console.log("i work")
    // const id = ''+ newDate(). getTime();
    // if (input.id === delBtn.id)
    // document.getElementById("task") = " ";
  //  list.removeChild(li)

//}
// delBtn.addEventListener("click", event => {
//     deleTe()
//     })

    

//editbtn.addEventListener("click", delete)





  

 
