import React, { Component } from 'react';

import Card from './../../components/card/card';
import axios from 'axios';


class Projects extends Component{
    constructor(){
        super();
        this.state = {
            projects: [],
        };
    }

    componentWillMount(){
        axios.get('http://localhost:8000/projects/')
        .then(result => {
            const { data: projects } = result;
            this.setState({ projects });
        })
        .catch(err => console.log(err))
    }

    render(){
        console.log('state', this.state);
        return(
            <div className="content">
                {this.state.projects.length > 0 && this.state.projects.map(project => (
                    <Card key={project.id} props={project} />
                ))}
            </div>
        )
    }
}

export default Projects;