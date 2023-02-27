import React from "react";

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    handleAttack(){
        alert("Attack clicked");
    }
    handleDefense(){
        alert("Defense clicked");
    }

    render(){
        return(
            <div className='row text-white'>
                <h2>Counter: {this.state.count}</h2>
                    <button onClick={this.handleAttack} style={{width:"200px"}}>+1</button>
                    <button onClick={this.handleDefense} style={{width:"200px"}}>-1</button>
            </div>
        )
    }
}
export default Counter;