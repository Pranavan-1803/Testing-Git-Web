//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Skill from './Skill';
import Bike from './BikeState';




// function Employee(props){
//   return(
//     <div>
//       <h1>Hello, {props.name}</h1>
//       <h1>Your Emp Id: {props.empid}</h1>
//     </div>
//   )
// }

class Emp extends React.Component{
  render(){
    return(<div>
      <h1>Hi,{this.props.name}</h1>
      <h1>Your emp id:{this.props.empid}</h1>
      <Skill skill='Developer'></Skill>
      <Bike></Bike>
      </div>
    )
  }
}


export default Emp
