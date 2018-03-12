import React, { Component } from 'react';
import './Navbar.css';
class Navbar extends Component {
    render(){
        return(
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
                <li className="active"><a href="/">Profile <span className="sr-only">(current)</span></a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                
            </ul>
            
            
            </div>
        </div>
            </nav>
            </div>
            
        )
    }
}

export default Navbar;
