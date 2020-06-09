import React from 'react';
import MyPhoto from '../images/my_photo.jpg';
import '../css/mainsection.css';
import Github from '../icons/github.svg';
import Twitter from '../icons/twitter.svg';
import Linkedin from '../icons/linkedin.svg';

const MainSection = () => {
    return(
        <div className="main-section">
            <div className="photo">
            </div>
            <div className="info-section">                
                <h1>Mansi Singh</h1>
                <p>Software Engineer</p>                
                <div className="socials">
                    <a href="" target='_blank'><img src={Github}></img></a>
                    <a href="" target='_blank'><img src={Twitter}></img></a>                
                    <a href="" target='_blank'><img src={Linkedin}></img></a>
                </div>
            </div>
            <div className="action-buttons">
                <p>Download CV</p>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default MainSection;