import React from "react";
import attack from "../Images/attack.png";
import defend from "../Images/defend.png";

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    handleAttack = () => {
        this.setState((previousState)=>{
            return{
                count:previousState.count + Math.round(Math.random()*10)
            }
        })
    }
    handleDefense = () => {
        this.setState((previousState)=>{
            return{
                count:previousState.count - Math.round(Math.random()*10)
            }
        })
    }
    handleRandomPlay = () => {
        let playMode = Math.round(Math.random());
        // if Math.random() generates a number less than 0.5, then playMode=0. Else playMode=1
        if(playMode===0) this.handleAttack()
        else this.handleDefense()
    }
    handleResetGame = () => {
        this.setState(()=>{
            return{
                count:0
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
                <div className="col-6 col-md-3">
                    <img src={defend} alt="Defend" 
                        onClick={this.handleDefense} 
                        style={{
                            width:"100%",
                            cursor:"pointer",
                            border:"1px solid red"
                        }}
                        className="p-4 rounded"/>
                </div>
                
                <div className="col-12 col-md-4 offset-md-4">
                    <button onClick={this.handleRandomPlay} className="btn btn-secondary w-100 mt-2">
                        Random Play
                    </button>
                    <br/>
                    <button onClick={this.handleResetGame} className="btn btn-warning w-100 mt-2">
                        Reset
                    </button>
                </div>
            </div>
        )
    }
}
export default Counter;