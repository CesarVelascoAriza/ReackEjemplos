import React, { Component } from "react";
import HighScore from "./HighScore";
import './App.css';

class Application extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            overTen: false
        }
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    }

    componentDidUpdate(props, state) {
        //console.log('update from',state,   'to', this.state)
        if (this.state.count > 10  && this.state.count !== state.count && !this.state.overTen) {
            console.log("update over ten")
            this.setState({ overTen: true });
        }
    }

    resentCount=(e)=>{
        console.log("event on reset", e)
        this.setState({
            count:0,
            overTen:false
        })
    }

    render() {
        let { count } = this.state;
        return (
            <div>
                <h1 >you clicked the button {count} times</h1>
                {/* {(this.state.overTen) ?
                    <h3> beat high score of !10  </h3>
                    : null
                } */}
                <HighScore 
                    overTen={this.state.overTen}
                    onReset={ this.resentCount}
                />
                <span>
                    <button onClick={() => this.handleClick()} >Click me </button>
                </span>
            </div>
        );
    }
}
export default Application;