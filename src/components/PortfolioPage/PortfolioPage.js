import React, { Component } from 'react';
import Projects from "./projects/Projects.js"
import projectList from "./projects/projectList.js"
class PortfolioPage extends Component{
    state = {
        activeProject: 0
    }
    selectProject = (e) => {
        this.setState({
            activeProject: e.target.id
        })
    }
    
    render(){
        return(
            <div className="text-center jumbotron">
                <ul className="nav nav-pills" role="tablist" style={{display: "inline-block"}}>
                    {
                        projectList.map((Project, i) => {
                            return (
                                <li role="presentation" key={i} className={this.state.activeProject.toString() === i.toString() ? "active" : ""}><a id={i} onClick={this.selectProject}>{Project.title}</a></li>
                            )
                        })
                    }
                </ul>
                <Projects project={projectList[this.state.activeProject]} />
            </div>
        )
    }
}

export default PortfolioPage;