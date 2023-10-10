import React, {Component} from "react";

class ScoreKeeper extends Component{
    constructor(props){
        super(props)
        this.state = {score: 0}

    }


    singleScore = () =>{
        this.setState((currentState) => ({score: currentState.score + 1}))
    }

doubleScore = () =>{
    this.setState((currentState) => ({score: currentState.score + 1}))
    this.setState((currentState) => ({score: currentState.score + 1}))
}

    tripleScore = () =>{
        this.setState((currentState) => ({score: currentState.score + 1}))
        this.setState((currentState) => ({score: currentState.score + 1}))
        this.setState((currentState) => ({score: currentState.score + 1}))
    }


    render(){
        return(
            <div className="ScoreKeeper">
                <h1>Score Keeper: {this.state.score}</h1>
                <button onClick={this.singleScore}>Single Kill</button>
                <button onClick={this.doubleScore}>Double Kill</button>
                <button onClick={this.tripleScore}>Triple Kill</button>
            </div>
        )
    }
}

export default ScoreKeeper