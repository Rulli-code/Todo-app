
const button = document.getElementById("button")

button.addEventListener("click", (event) => {
    event.preventDefault() 
   
  
        //pega os dados dos inputs
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value  
        const confPsw = document.getElementById("confPsw").value
        const name = document.getElementById("name").value
        const lastName = document.getElementById("lastName").value
        const confEmail = document.getElementById("confEmail").value
        const resetToken = document.getElementById("resetToken").value
  
        //valida o campo de email
        if (email == "") {
          alert("Confirm your email adress ...")
          return
        }
  
        //valida o campo de senha
        if (password == "") {
          alert("Confirm your Password ...")
          return
        }
        if (confPsw == "") {
            alert("Confirm your Password ...")
            return
        }

        //valida o campo de name
        if (name == "") {
            alert("The information of your name is missing.")
            return
        }

        //valida o campo de lastName
        if (lastName == "") {
            alert("The information of your last name is missing.")
            return
        }
        
        //valida o campo de confEmail
        if (confEmail == "") {
            alert("Your email address don't match.")
            return
        }

                
        //cria o objeto com os dados
        const data = {
            name: name,
            lastName: lastName,
            email: email,
            confEmail: confEmail,
            password: password,
            confPsw: confPsw,
            resetToken: resetToken,
        }
           
        //faz um console log
        console.log(data)
})

var todos = []

        function handleSubmitForm() {
            var todoInput = document.getElementById('todo')
            var todoInputValue = todoInput.value
            var activeTodosCountElement = document.getElementById("active-todos-count")

            if (todoInputValue == "") {
                alert("Sem tarefa")
                return
            }

            createTodo(todoInputValue)

            todoInput.value = ""
        }

        function createTodo(todoTitle) {
            var todo = {
                id: todos.length + 1,
                title: todoTitle,
                completed: false
            }

            todos.push(todo)
            createTodoElement(todo)
        }

        function createTodoElement(todo) {
            var todoList = document.getElementById("active-todos")
            var todoItem = document.createElement("div")

            todoItem.classList.add("todo-list-card")
            todoItem.innerHTML = todo.title
            todoItem.id = "todo-" + todo.id

            todoItem.onclick = function toogleTodo() {
                var todoIndex = todos.findIndex(item => item.id == todo.id)
                var todoElement = document.getElementById("todo-" + todo.id)

                todos[todoIndex].completed = !todos[todoIndex].completed

                if (todos[todoIndex].completed === true) {
                    todoElement.classList.remove("completed")
                }

                if (todos[todoIndex].completed === false) {
                    todoElement.classList.add("completed")
                }
            }

            todoList.appendChild(todoItem)
        }

        async function onPageLoad() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            todos = await response.json()

            todos.map(todo => {
                createTodoElement(todo)
            })
        }


