import React from 'react';
import Display from './Display';

class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = { 
            strike: 0,
            ball: 0
        }
    }
    strikeHandler = () => {
        if ( this.state.strike < 2 ) {
            this.setState({
                strike: this.state.strike + 1
            }) 
        } else { this.setState({
            strike: 0, 
            ball: 0
            }) 
        };
    }
    ballHandler = () => {
        if ( this.state.ball < 3 ) {
            this.setState({
                ball: this.state.ball + 1
            }) 
        } else { this.setState({
            strike: 0, 
            ball: 0
            }) 
        };
    }
    foulHandler = () => {
        if ( this.state.strike < 2 ) {
            this.setState({
                strike: this.state.strike + 1
                }) 
        } else { return; }
    }
    hitHandler = () => {
        this.setState({
            strike: 0,
            ball: 0
        })
    }

    
    render(){
        return (
            <>
            <Display counts={this.state}/> 
            
            <div>
                <button data-testid="strikeButton" onClick={() => this.strikeHandler()}>strike</button>
                <button data-testid="ballButton" onClick={() => this.ballHandler()}>ball</button>
                <button data-testid="foulButton" onClick={() => this.foulHandler()}>foul</button>
                <button data-testid="hitButton" onClick={() => this.hitHandler()}>hit</button>
            </div>
            </>
        )
    }
   
}

export default Dashboard