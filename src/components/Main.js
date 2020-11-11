import React, {Component} from 'react';
import Data from '../utils/Data';

export default class Home extends Component {
  render(){

    return(
      <div align="center">
        <h1 style={{textAlign: "center", color: "#575D51", fontFamily: "Acme", padding:10, marginTop:10}}>Julee Butler</h1>
        <img src={Data.aboutImage} alt="julee" width="30%" height="20%" align="center"></img>
        <h3 style={{textAlign: "center", color: "#575D51", fontFamily: "Acme", padding:10, marginTop:10}}>{Data.headerTagline[0]}</h3>
        <h3 style={{textAlign: "center", color: "#575D51", fontFamily: "Acme", padding:10, marginTop:10}}>{Data.headerTagline[1]}</h3>
      </div>
    );
  }
}