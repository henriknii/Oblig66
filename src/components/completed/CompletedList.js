import React from 'react'
import CompletedListItem from "./CompletedListItem"

const CompletedList = ({completedTodos}) => {

    return(
     
      <div className="comppletedListContainer">
     <h1>Completed Todos</h1>
     <table className="table">
     <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Author</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
    
      {completedTodos && completedTodos.length >= 1 && completedTodos.map((completed) =>(
          
          <CompletedListItem title={completed.title} description={completed.description} author={completed.author}></CompletedListItem>
   

      ))}
</table>
  </div>
    )
}


export default CompletedList