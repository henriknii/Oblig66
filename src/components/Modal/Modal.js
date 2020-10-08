import React from 'react'

const Modal = ({addTodo,setFormData,formData,setModal}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        closeModal()
        addTodo();
    }

    const updateValue = (event) => {
        const value = event.target.value;
        setFormData({...formData,
        [event.target.name]:value})
    };

    const closeModal = () => {
        setModal(false)
    }

    return (
        <div className="modal-bg bg-active" >
        <div className="todoModal shadow-lg p-3 mb-5 bg-white rounded" >
            <div className="newTodo">
                <p className="modalTitle">New Todo</p>
                <p className="exit" onClick={closeModal}> X </p>
            </div>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input name="title" value={formData.title} onChange={updateValue} autoFocus />

            <label>Description</label>
            <input name="description" value={formData.description} onChange={updateValue}  />

            <label>Author</label>
            <input name="author" value={formData.author} onChange={updateValue} />
            <button  className ="create btn btn-success" type="submit">Create</button>
        </form>
        </div>
        </div>
    )
}

export default Modal