import React from 'react'
import TodoCard from './TodoCard'
const TodoCardList = ({todos,removeTodo,completeTodo}) => {



    return(
        <div className="todoListContainer">
            {todos && todos.length >= 0 && todos.map((todo) =>(
            <div className="todoListItem shadow-lg p-3 mb-5 bg-white rounded"   key={todo.id} >
            <TodoCard 
                removeTodo={removeTodo} 
                id={todo.id} 
                title={todo.title} 
                description = {todo.description} 
                author={todo.author}
                completeTodo={completeTodo}>
            </TodoCard>
            </div>
            ))}

        </div>
    )
}


export default TodoCardList