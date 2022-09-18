import React from 'react';
function Todo({todo}) {
    console.log("From Todo:" ,todo );
    return ( 
        
            <p>{todo}</p>
        
     );
}

export default Todo;