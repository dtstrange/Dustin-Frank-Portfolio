import React, { Component } from 'react';
import './Portfolio.css';
import { Link } from "react-router-dom";
import journifi from "./images/journifi.png";
import liftovers from "./images/lift-overs.png";
import burger from "./images/Burger.png";
import digitome from "./images/digi-tome.png";

class Portfolio extends Component{
    render(){
        return(
            <div className="row">
                <h2>Portfolio</h2>
                <div className="col-md-6">
                    <div>
                        <h3>Journifi</h3>
                        <Link to="https://dtstrange.github.io/Journifi/" target="_blank">
                            <img id="journifi" src={journifi} alt={"Journifi"}></img>
                        </Link>
                        <p>Journified is an event search engine utilizing the Ticketmaster Google Geolocation APIs. Originally it was also planned to integrate the google places API for additional search options such as resturants, and various other businesses for people traveling. <br></br><br></br>The front end is styled with Bootstrap and custom CSS. <br></br><br></br> I was responsible for Google Goelocation API and populatiing the coordinates into the search field</p>
                    </div>
                    <br></br>
                    <div>
                        <Link to="https://dtstrange-burger.herokuapp.com/" target="_blank">
                            <img src={burger} alt={"Burger App"}></img>
                        </Link>
                        <p>This is an application where you can add a burger to a list which will have a button to move it to the eaten list.<br></br><br></br>The frontend is generated with Handlebars, and Bootstrap. The backend consists of MySQL and Sequelize.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                    <h3>LiftOvers</h3>
                        <Link to="https://lift-overs.herokuapp.com/" target="_blank">
                            <img src={liftovers} alt={"LiftOvers"}></img>
                        </Link>
                        <p>Lift-overs is a food donation web application designed for business such as grocery stores and resturants to donate to organizations like food kitchens and NPOs. Drivers can donate their time to transport the food once the donation has been scheduled. <br></br><br></br>The frontend is generated using Handlebars, and bootstrap. MySQL was used for the database with Sequelize as the ORM.<br></br><br></br> I was responsible for The express server, routes, and authentication system.</p>
                    </div>
                    <div>
                        <Link to="#">
                            <img src={digitome} alt={"Digi-Tome"}></img>
                        </Link>
                        <p>Coming Soon</p>
                    </div>
                    <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                </div>
            </div>
        )
    }
}

export default Portfolio;