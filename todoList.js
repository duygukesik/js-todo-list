const addInput = document.querySelector("#todoName");
const searchInput = document.getElementById("todoSearch");
const todoList = document.querySelector(".list-group");

// let todos = [];

// runEvents();

// function runEvents(){
//     form.addEventListener("submit", addTodo);
// }

// function addTodo(e){
// const inputText = addInput.value.trim();
// if(inputText == "" || inputText == null){
//      alert('Lütfen bir değer giriniz!');
// }else{
//     //Arayüze ekleme
//     addTodoToUI(inputText);
//     addTodoToStorage(inputText);
// }
// //storage ekleme
// e.preventDefault();//farklı bir sayfaya gitmemek için engelledik

// }

// function addTodoToUI(newTodo){
// const li = document.createElement("li");
// li.className = "list-group-item d-flex justify-content-between";
// li.textContent = newTodo;

// const a = document.createElement("a");
// a.href = "#";
// a.className = "delete-item";

// const i = document.createElement("i");
// i.className="fa fa-remove";

// a.appendChild(i);
// li.appendChild(a);
// todoList.appendChild(li);

// addInput.value="";
// }

// function addTodoToStorage(newTodo){
//    if(localStorage.getItem("todos")==null){
//     todos = [];
//    }else{
//      todos = JSON.parse(localStorage.getItem("todos"));
//    }
// }
let todos = new Set();

function addTodo(){
  if(addInput.value == ""){
    alert("Pls enter a todo!");
  }else if(todos.has(addInput.value)){
    alert("You have already added this todo!");
  }else{
//     <li class="list-group-item d-flex justify-content-between">Todo 4
//     <a href="#" class="delete-item">
//         <i class="fa fa-remove"></i>
//     </a>
// </li> 
   let li = document.createElement("li");
   li.className = "list-group-item d-flex justify-content-between";
   li.textContent = addInput.value;

   let a = document.createElement("a");
   a.href="#";
   a.className = "delete-item";

   let i = document.createElement("i");
   i.className = "fa fa-remove";

   a.appendChild(i);
   li.appendChild(a);
   todoList.appendChild(li);

  
  }
}




