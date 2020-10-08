import React from 'react'

const CompletedListItem = ({title,description,author}) =>{
    
    var d = new Date();
    var date = d.getFullYear();
    

    return(
        
   
  <tbody>
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td>{author}</td>
        <td>{date}</td>
    </tr>
  </tbody>


    )
}


export default CompletedListItem 