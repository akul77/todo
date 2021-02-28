const form = document.getElementById('it');
const input = document.getElementById('listitem');
const todos = document.getElementById('to-do');

form.addEventListener("submit", (e)=>{

	e.preventDefault();
   
	const todoText = input.value;
	 
	if(todoText){
    const todoE1 = document.createElement('li');
    todoE1.innerHTML = todoText;
    todoE1.addEventListener("click", ()=>{
      todoE1.classList.toggle("completed");
   

    });
    todoE1.addEventListener("contextmenu", (e) =>{
    	e.preventDefault();
    	todoE1.remove();
    	
    });

    todos.appendChild(todoE1);
     input.value ="";

   }
});
