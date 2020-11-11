import React from 'react';
import Data from '../utils/Data'

const Contacts = () => {

  let liStyle = {
    color: "#E5B13A",
    fontFamily: "Acme",
    fontSize: 25,
    textAlign: "center",
    paddingLeft: 0,
    listStyle: "none"
  };

  return(
    <div>
      <h1 style={{textAlign: "center", color: "#575D51", fontFamily: "Acme", padding:10, marginTop:0}}>Contact Julee Butler</h1>
      <br/>
      <h1 style={{textAlign: "center", color: "#575D51", fontFamily: "Acme", padding:10, marginTop:10}}>If you are interested more</h1>
      <br/>
      <ul style={liStyle}>
        <li style={{color: "#575D51"}}>EMAIL: {Data.contactEmail}</li>
        <li style={{color: "#575D51"}}>GITHUB: <a href={Data.websites[0].url} style={{color: "#575D51"}}>{Data.websites[0].name}</a></li>
        <li style={{color: "#575D51"}}>LINKED IN: <a href={Data.websites[1].url} style={{color: "#575D51"}}>{Data.websites[1].name}</a></li>
      </ul>
    </div>
    
  );
};

export default Contacts;