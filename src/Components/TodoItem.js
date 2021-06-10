import React from 'react'

 function TodoItem(props) {
    
    return (
        <div className='todo-item'>
            <input 
            onChange={() => props.handleChange(props.list.id)} type='checkbox' 
            checked={props.list.completed} />
            <p>{props.list.text}</p>
           
        </div>
    )
}

export default TodoItem
