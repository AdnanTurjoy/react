import React, { useState } from 'react';
import NewTodo from './newTodo';
import Todos from './Todos';
function HomeTodos() {
    const [todo,setTodo]=useState(["adnan1","Turjoy2"])
    const handleAddTodo=(add)=>{
        setTodo([...todo,add])
        
    }
    return ( 
        <div>
            <NewTodo addTodo={handleAddTodo}/>
            <Todos todos={todo}/>
        </div>
        
     );
}

export default HomeTodos;
