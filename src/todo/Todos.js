import React from 'react';
import Todo from './Todo';
function Todos(props) {
    console.log(props.todos);
    return ( 
        <div>
            {
                props.todos.map((todo,id)=>(
                    <Todo key={id} todo={todo} />
                ))
            }
        </div>
     );
}

export default Todos;