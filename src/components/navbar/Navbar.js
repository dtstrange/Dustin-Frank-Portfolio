import React, { Component } from 'react';
import './Navbar.css';
import NavLink from "../nav_link/nav_link";
const fontstyle ={
    color: "#dd2108"
};

class Navbar extends Component {
    render(){
        return(
          <div className="row">  
            <div className="col-md-12">
                    <nav className="navbar navbar-default">
            <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">Dustin Frank</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
                <li><NavLink to="/">Profile </NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                
            </ul>
            
            
            </div>
        </div>
            </nav>
            </div>
            </div>
            
        )
    }
}

export default Navbar;
