import React, { Component } from 'react';


class Event_Handler extends Component {

    state ={
        changeValue: ''
    }

    handleClick = () => {
        console.log("clickeeddd");
    }
    handleChange =(e)=>{
        this.setState({
            changeValue: e.target.value
    })

    }

    render() {
        return (
            <div>
                <button className='btn' onClick={this.handleClick}>Click</button>
                <input type="text" onChange={this.handleChange} />
                <h1>{this.state.changeValue}</h1>
            
            </div>
        );
    }
}

export default Event_Handler;