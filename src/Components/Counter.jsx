import React from "react";
import attack from "../Images/attack.png";
import defend from "../Images/defend.png";

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
        //Correct:
        //this.setState({count:this.state.count+1})

        //Even better way:
        this.setState((previousState)=>{
            return{
                count:previousState.count + Math.round(Math.random()*10)
            }
        })
    }
    handleDefense(){
        //this.setState({count:this.state.count-1})
        this.setState((previousState)=>{
            return{
                count:previousState.count - Math.round(Math.random()*10)
            }
        })
    }

    render(){
        return(
            <div className='row text-white text-center'>
                <h2>Game Score: {this.state.count}</h2>

                <div className="col-6 col-md-3 offset-md-3">
                    <img src={attack} alt="Attack" 
                        onClick={this.handleAttack} 
                        style={{
                            width:"100%",
                            cursor:"pointer",
                            border:"1px solid green"
                        }}
                        className="p-4 rounded"/>
                </div>
                <div className="col-6 col-md-3 offset-md-3">
                    <img src={defend} alt="Defend" 
                        onClick={this.handleDefense} 
                        style={{
                            width:"100%",
                            cursor:"pointer",
                            border:"1px solid red"
                        }}
                        className="p-4 rounded"/>
                </div>
                
            </div>
        )
    }
}
export default Counter;