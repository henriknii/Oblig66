import React from 'react';


const TodoButton = ({setModal}) => {    

    const openModal = () => {
        setModal(true)
    }
    return(
        
        <p onClick={openModal} id="create-todo">Create todo</p>
    )
   
}

export default TodoButton;