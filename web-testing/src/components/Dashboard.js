import React from 'react';
import Display from './components/Display';

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
        } else { this.state.strike = 0 };
    }
    ballHandler = () => {
        if ( this.state.ball < 3 ) {
            this.setState({
                ball: this.state.ball + 1
            }) 
        } else { this.state.ball = 0 };
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
            
            <container>
                <button onClick={() => this.strikeHandler()}>strike</button>
                <button onClick={() => this.ballHandler()}>ball</button>
                <button onClick={() => this.foulHandler()}>foul</button>
                <button onClick={() => this.hitHandler()}>hit</button>
            </container>
            </>
        )
    }
   
}

export default Dashboard