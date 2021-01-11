import React from 'react';
import Address from './Address';

function Skill(props){
    return(
      <div>
        <h1 style={{color:"royalblue"}}> My Skill: {props.skill}</h1>
        <Address address="Poonamallee"></Address>
  
      </div>
    )
  }

  export default Skill