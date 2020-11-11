import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Data from '../utils/Data';

export default class BaseLayout extends Component {
  render(){

    let headerStyle = {
      backgroundColor: "#D9F7DA",
      height: 70,
    }

    let ulStyle = {
      listStyle: "none",
      margin: 0,
      padding: 26,
    }

    let liStyle = {
      display: "inline",
    }

    let linkStyle = {
      border: "1px solid #737B6D",
      borderRadius: 10,
      padding: "15px",
      marginRight: "30px",
      textDecoration: "none",
      color: "#575D51",
      backgroundColor: "#EBF5FB",
    }

    let footerStyle = {
      textAlign: "center",
      backgroundColor: "#D9F7DA",
      height: "40%",
      color: "#575D51",
      fontFamily: "Acme",
      margin: 15,
    }

    return(
      <div>
        <div style={headerStyle} align = "center">
          <ul style={ulStyle}>
            <li style={liStyle}>
              <NavLink exact to="/" style={linkStyle} activeStyle={{color:"#E9D9F7"}}>Home</NavLink>
            </li>
            <li style={liStyle}>
              <NavLink to="/project" style={linkStyle} activeStyle={{color:"#E9D9F7"}}>Project</NavLink>
            </li>
            <li style={liStyle}>
              <NavLink to="/contact" style={linkStyle} activeStyle={{color:"#E9D9F7"}}>Contact</NavLink>
            </li>
          </ul>
        </div >
        <div style={{backgroundColor: "#E7F7D9", height: "100vh", marginTop: "18px", padding: "20px"}}>
          {this.props.children}
        </div>
        <footer className="navbar navbar-fixed-bottom" style={footerStyle}>
          <p>Julee Butler Portfolio</p>
          <p><a href={Data.websites[0].url}>{Data.websites[0].name}</a></p>
          <p><a href={Data.websites[1].url}>{Data.websites[1].name}</a></p>
        </footer>
      </div>
    );
  }
}