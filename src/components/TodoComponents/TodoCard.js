import React from 'react'

const TodoCard = ({id,title,description,author,removeTodo,completeTodo}) => {

    return(
    <div>
    <p>{id}</p>
     <h3>{title}</h3>
     <p>{description}</p>
     <p>{author}</p>
     <button className="m-1 btn btn-success" onClick={ () =>completeTodo(id)} >Complete</button>
     <button className="m-1 btn btn-danger" onClick={() => removeTodo(id)}>Delete</button>
    </div>
    )
}

export default TodoCard