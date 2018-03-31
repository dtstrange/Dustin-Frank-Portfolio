import React, { Component } from 'react';
import './Footer.css';

const position = {
    position: "sticky",
    bottom: "50px"

};

class Footer extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="footer" style={position} >
                        <p className="textCenter">Copyright 2018 Dustin Frank</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;