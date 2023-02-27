import React from "react";

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefense = this.handleDefense.bind(this);
        this.state = {
            count:0
        }
    }

    handleAttack(){
        /* this.state.count += 1;
        * You can't directly modify the state!
        * STATE IS IMMUTABLE !!! */
       this.setState({count:this.state.count+1})
    }
    handleDefense(){
        this.setState({count:this.state.count-1})
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