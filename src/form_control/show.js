import React from 'react';
function Show(props) {
    console.log("come from FORM Component",props.userInfo)
    const childData="i am from show component(Child)";
    props.childData(childData);
    return ( 
        <div>
               <h1>Show Component: {props.userInfo}</h1>
        </div>
     
    

     );
}

export default Show;