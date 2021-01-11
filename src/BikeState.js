import React from 'react';

class Bike extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brand: 'KTM',
            color: 'White',
            cc: 100
        }
    }
    ChangeColor=()=>{
        this.setState({
            color: 'Orange'
        })
    }
    AddCC=()=>{
        this.setState({
            cc: this.state.cc +1
        })
    }
    SubCC=()=>{
        this.setState({
            cc: this.state.cc -1
        })
    }
    AddCCplus5=()=>{  
        this.setState({
            cc: this.state.cc +5
        })
    }
    render(){
        return(
            <div>
            <h1>About My Bike</h1>
            <p>It is a {this.state.brand} bike, {this.state.color} in color with {this.state.cc} cc</p>
            <button onClick={this.ChangeColor}>Change Color</button>
            <button onClick={this.AddCC}>Add CC</button>
            <button onClick={this.SubCC}>Sub CC</button>
            <button onClick={this.AddCCplus5}>Add +5 CC</button>
            </div>
        )
    }
}


export default Bike;