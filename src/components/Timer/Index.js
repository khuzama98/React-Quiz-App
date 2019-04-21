import React from 'react';

class Timer extends React.Component{
    constructor(){
        super();
        this.state={
            sec:0,
            min:0
        }
    }
    
    time = () => {
        const {sec,min} = this.state;
        if(sec<59){
            this.setState({
                sec: sec+1
            })
        }
        else{
            this.setState({
                sec:0,
                min: min+1
            })
        }
    }
    
    componentDidMount(){
        const timer = setInterval(()=>this.time(),1000)  
        this.setState({
            timer
        })
    }

    componentWillUnmount(){
        clearInterval(this.state.timer)
        this.props.getTime(this.state.min,this.state.sec)
    }
    
    render(){
        const {sec,min} = this.state;
        const toDisplaySec = sec<10 ? '0'+sec : sec
        const toDisplayMin = min<10 ? '0'+min : min
        return(
            <div style={{textAlign:'right'}} >{toDisplayMin}:{toDisplaySec}</div>
            )
        }
    }
    
    export default Timer