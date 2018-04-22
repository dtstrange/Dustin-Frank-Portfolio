import React, { Component } from 'react';
import './Portfolio.css';
import { Link } from "react-router-dom";
import journifi from "./images/journifi.png";
import liftovers from "./images/lift-overs.png";
import phandroid from "./images/phandroid.png";
import digitome from "./images/digi-tome.png";
import cc from "./images/cc.png";
import batman from "./images/batman.png"

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
                        <h3>Phandroid Scraper</h3>
                        <Link to="https://dtstrange-tech-scraper.herokuapp.com/" target="_blank">
                            <img src={phandroid} alt={"Phandroid Scraper App"}></img>
                        </Link>
                        <p>Using bootstrap Mongoose and Cheerio this app scrapes the latest articles from Phandroid.com</p>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                        <h3>Crystals-Collector</h3>
                        <Link to="https://dtstrange.github.io/Crystals-collector/" target="_blank">
                            <img src={cc} alt={"Crystals-collector"}></img>
                        </Link>
                        <p>Click game built using html5 and jquery</p>
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
                        <h3>Digi-Tome</h3>
                        <Link to="https://digi-tome.herokuapp.com/" target="_blank">
                            <img src={digitome} alt={"Digi-Tome"}></img>
                        </Link>
                        <p>Digi-Tome is a budding online community for authors and bibliophiles alike. Writing enthusiasts can view and share each others work.<br></br><br></br>The fontend is generated using React, Bootstrap, and Particles.js. The backend users Express.js, JWT, MySQL, Sequelize, Express-Fileupload, Axios <br></br><br></br>I was responsible for the express server, implementing the pdf preview component react-pdf-js, authentication system, routes, favicon, and deployment</p>
                    </div>
                    <br></br>
                    <br></br>
                    
                    <div>
                        <h3>Batman Trivia Game</h3>
                        <Link to="https://dtstrange.github.io/TriviaGame/" target="_blank">
                            <img src={batman} alt={"Batman Trivia Game"}></img>
                        </Link>
                        <p>Batman trivia game with a javascript built timer.</p>
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