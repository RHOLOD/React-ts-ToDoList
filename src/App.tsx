import React from 'react';
import './App.css';
import{useState,useEffect,useRef} from 'react';
import { title } from 'process';

function App() {  

  let num = 1;
  const [todos, setTodos] = useState( [{
      title:  "task",
      id: 1,
      checked:false
    }

  ]);
  const [name, setName] = useState("");
  const [count, setCount] = useState(6);
  const [checked, setChecked] = useState(false);

  const addTodo = () =>{    
    todos.push({title:name,id:count+1,checked:false});
    setCount(count + 1);
    sortingСompleted();
    setName("");
  }

  const checkedTodo = (id:any) =>{
    const newTodos = todos.map(function(todo) {
      if (todo.id === id)
      {
        todo.checked = !todo.checked;
      }
      return todo});
    setTodos(newTodos);
    sortingСompleted();
  }
  const deleteTodo = (id:any) =>{
    const newTodos = todos.filter((todo) => todo.id !== id );
    setTodos(newTodos);
  }
  const sortingСompleted=() =>{
    const activeTasks = todos.filter((todo) => todo.checked == false);
    const completedTasks = todos.filter((todo) => todo.checked == true);
    const newTodos = [...activeTasks,...completedTasks];
    setTodos(newTodos);
  }
  return (
    <div className='App'>
        <h1>ToDoList</h1>
        <div className="flex-wrapper">
            <div className="add-todo-wrapper">
                <div className="input-wrapper">
                    <input type="text" id="description-task" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="button-wrapper">
                    <button  type="button" onClick={addTodo}>Добавить</button>
                </div>
            </div>
            <h2>Задачи на день:</h2>
            <div className="todos-wrapper">
                 {todos.map((todo) =>(
                    <div className='todo-item' key={todo.id.toString()}> 
                      <div className="description">{todo.title}</div>
                      <div className="buttons">
                        <input className='add-task-inp' type="checkbox" checked={todo.checked} onChange={() => checkedTodo(todo.id)} />               
                        <button className='add-task-btn' type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>                
                      </div>
                    </div>                            
                  ))}  
            </div>
        </div>
    </div>
  );
}
export default App;
