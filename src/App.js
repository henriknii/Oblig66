import React,{useState} from 'react';
import Header from './components/Navigation/Header'
import Modal from './components/Modal/Modal'
import TodoButton from './components/TodoComponents/TodoButton'
import TodoCardList from './components/TodoComponents/TodoCardList'
import CompletedList from './components/completed/CompletedList'

import './App.css';

function App() {
  const [formData, setFormData] = useState({title: "",description:"" ,author: ""});
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false);
  const [completedTodos,setCompletedTodo] =useState([]);
 

  const addTodo = () => {

    setTodos(todos => [...todos,{id: todos.length, ...formData }]);
   console.log(todos)
  };

  const completeTodo = (id) => {

    const completedTodo = todos.filter((todo) => todo.id === id);
    console.log(completedTodos)
  
    setCompletedTodo(completedTodos => [...completedTodos,completedTodo[0]]);

    removeTodo(id);
  }
  

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
   
  }

  const openModal = () => {
   let modalBg = document.querySelector('modal');
  }
  return (
    <div className="App">
     <Header />
     {modal &&
        <Modal
          addTodo={addTodo}
          setFormData={setFormData}
          formData={formData}
          setModal={setModal}
        />
      }
    
      <TodoButton setModal={setModal}></TodoButton>
      
      <TodoCardList todos={todos} removeTodo={removeTodo} completeTodo={completeTodo}></TodoCardList>

      <CompletedList completedTodos={completedTodos}></CompletedList>
    </div>

  
  );
}

export default App;
