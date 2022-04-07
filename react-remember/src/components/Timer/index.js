import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            count: new Date(0,0,0,0)
        }

        this.timerId = null;
    }

    componentDidMount(){
        console.log('componentDidMount');
        this.start();
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');

        if (this.state.count > 10) {
            clearInterval(this.timerId);
            return false;
        }
        return true;
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timerId);
    }

    tick = () =>{
        const {count} = this.state;
        this.setState((state, props) => {
            const {count} = state;
            const newDate = new Date(count.setSeconds(count.getSeconds()+1));
            return {count: newDate}
        })
        this.timerId =  setTimeout(this.tick, 1000);
    }

    start = () => {
        if(!this.timerId) {
            this.tick();
        }
    }

    stop = () => {
        console.log('stopped');
        clearTimeout(this.timerId);
        this.timerId = null;
    }

    reset = () => {
        this.stop();
        this.setState({
            count: new Date(0,0,0,0)
        });
    }



    render(){
        console.log('render');
        const {count} = this.state

        return (
            <>
            <h1>{count.toLocaleTimeString()}</h1>
            <button onClick={this.start}>Start</button>
            <button onClick={this.stop}>Stop</button>
            <button onClick={this.reset}>Reset</button>
            </>
        )
    }
}


export default Timer