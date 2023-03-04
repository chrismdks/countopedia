import React from "react";
import attack from "../Images/attack.png";
import defend from "../Images/defend.png";

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count:0,
            lastPlay:"-",
            gameStatus:"-"
        }
    }

    handleAttack = () => {
        this.setState((previousState)=>{
            let newCount = previousState.count + Math.round(Math.random()*10);
            return{
                count: newCount,
                lastPlay: "Attack",
                gameStatus: newCount>=10 ? "You Won!" : "-"
            }
        })
    }
    handleDefense = () => {
        this.setState((previousState)=>{
            let newCount = previousState.count - Math.round(Math.random()*10);
            return{
                count: newCount,
                lastPlay: "Defense",
                gameStatus: newCount<=-10? "You Lost!" : "-"
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
                count:0,
                lastPlay:"-",
                gameStatus:"-"
            }
        })
    }

    render(){
        return(
            <div className='row text-white text-center'>
                <h2>Game Score: {this.state.count}</h2>
                <p>Last Play: {this.state.lastPlay}</p>
                <h3>Game Status: {this.state.gameStatus}</h3>

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