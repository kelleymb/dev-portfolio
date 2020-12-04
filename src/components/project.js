import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


//ADD A LIVE AND REPO LINKE TO THE PROJECT
//RIGHT NOW THE PROJECT WILL GO TO LIVE ON CLICK 
//BUT NEED TO ADD A REPO LINK TO READ THE CODE
//ESPECIALLY FOR BOTH CLIENT REPO AND API REPO
class Project extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
        <div className='project'>
        <a href={this.props.url}>
            <img src={this.props.imageSrc} alt={this.props.title}></img>
            </a>
            <h1>{this.props.title}</h1>
            <span>{this.props.service}</span>
            
        </div> 
            </Fade>);
    }
}
 
export default Project;