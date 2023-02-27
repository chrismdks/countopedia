import React from "react";

class Counter extends React.Component{

    handleAttack(){
        alert("Attack clicked");
    }
    handleDefense(){
        alert("Defense clicked");
    }

    render(){
        return(
            <div className='row text-white'>
                <h2>Counter:</h2>
                    <button onClick={this.handleAttack} style={{width:"200px"}}>+1</button>
                    <button onClick={this.handleDefense} style={{width:"200px"}}>-1</button>
            </div>
        )
    }
}
export default Counter;