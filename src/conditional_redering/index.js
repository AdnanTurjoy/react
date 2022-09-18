import React,{Component} from "react";

import Home from "./Home";
import Login from "./Login";

class Conditional_rendering extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        isLoggedIn: false
     }
    render() { 
        const {isLoggedIn}= this.state;
        return ( 
            <div>
                {isLoggedIn ? <Home/> : <Login/> }
                {/* {isLoggedIn && <Home/>} */}
            </div>
         );
    }
}
 
export default Conditional_rendering;