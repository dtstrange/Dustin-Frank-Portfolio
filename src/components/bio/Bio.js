import React, { Component } from 'react';
import me from './images/me.jpg';
import github from './images/github-512.png';
import linkedin from './images/linkedin.png';
import email from './images/email.png'
import { Link } from "react-router-dom";
import './Bio.css';

const me_style ={
    height: "250px",
    width: "auto",
    float: "left"
};
const bio_style = {
    margin: "0px 0px 0px 50px"

};

const bioText = {
    color: "#333333"
};

const icon = {
    height: "128px",
    width: "128px"
}

class Bio extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <img className="media-object img-rounded" src={me} alt={"Me!"} style={me_style}></img>    
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div style={bio_style}>
                        <p id="bio" style={bioText}>I am a full stack developer with IT roots. For over a decade I have been an adept IT consultant and am now taking my talents to coding. I have recently completed a six-month intensive coding course at UCI. I am keen on backend, DEVOPS, and mobile app development. I will be pursuing the mobile app languages in my spare time such as REACT native, Kotlin, and Swift.</p>
                        <Link to="https://github.com/dtstrange" target="_blank">
                          <img style={icon} src={github} alt={"My Github"}></img>  
                        </Link>
                        <Link to="https://www.linkedin.com/in/dustin-frank/" target="_blank">
                            <img style={icon} src={linkedin} alt={"My Linkedin"}></img>
                        </Link>
                        <Link to="mailto:dustintstrange@gmail.com?Subject=From%20your%20portfolio%20site" target="_top">
                            <img  style={icon} src={email} alt={"Email me"}></img>
                        </Link>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        
                        
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Bio;