import React from 'react';
import '../../css/about.css';

const About = () => {
    return(
        <>
        <h1 className="first-title">About Me</h1>
        <div className="intro">
        <h3 classname="greeting">Hello! I am Mansi Singh</h3>
          <p className="into-summary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore hic
            ab explicabo quis blanditiis neque dolor laborum fugit aliquam
            repudiandae!
          </p>
        </div>
        <div className="personal-info">
            <div className="info-row">
                <span>Country</span>
                <span>India</span>
            </div>
            <div className="info-row">
                <span>City</span>
                <span>Bangaluru</span>
            </div>
            <div className="info-row">
                <span>Languages</span>
                <span>Hindi, English</span>
            </div>
            <div className="info-row">
                <span>Hobbies</span>
                <span>Reading</span>
            </div>
        </div>
        <div className="fun-facts">

        </div>
        </>
    )
}

export default About;