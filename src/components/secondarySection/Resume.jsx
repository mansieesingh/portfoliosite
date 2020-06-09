import React from 'react';
import '../../css/resume.css';

import Javascript from '../../icons/javascript.svg';
import ReactIcon from '../../icons/react-icon.svg';
import HTMLIcon from '../../icons/html5.png';
import CSSIcon from '../../icons/css3.png';
import SassIcon from '../../icons/sass.svg';
import GitIcon from '../../icons/github.png';
import Checkmark from '../../icons/checkmark.svg';

const Resume = () => {
    const knowledgeItems = [
        'Git Workflow',        
        'React-Redux',
        'Redux-Saga',
        'AngularJS',
        'Agile Methedology',
        'Responsive Design',
        'Database & SQL',
    ]
    return(
        <>
        <h1 className="first-title">Resume</h1>
        <div className="experiences">
            <div className="experience">
                
            <p className="work-place">Cognizant Technologies Solutions</p>
                <h4 className="job-title"> Associate - Projects</h4>
                <p className="job-dur">May 2020 - Present</p>
                <p className="job-summary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium minus labore neque quidem sapiente in eligendi impedit
                perspiciatis quae excepturi.
                </p>
            </div>

            <div className="experience">
                <p className="work-place">Wipro Technologies</p>
                <h4 className="job-title">Senior Software Engineer</h4>
                <p className="job-dur">July 2015 - May 2020</p>
                <p className="job-summary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium minus labore neque quidem sapiente in eligendi impedit
                perspiciatis quae excepturi.
                </p>
            </div>
        </div>
        <h1 className="title">My Skills</h1>
        <div classname="skill-box">
            <div className="stack">
                <h3>Stack</h3>
                <div className="techs">
                    <img className="tech-icon" src={Javascript} alt="javascript"/>
                    <img className="tech-icon" src={ReactIcon} alt="reacticon"/>
                    <img className="tech-icon" src={HTMLIcon} alt="HTMLIcon"/>
                    <img className="tech-icon" src={CSSIcon} alt="CSSIcon"/>
                    <img className="tech-icon" src={SassIcon} alt="SassIcon"/>
                    
                    <img className="tech-icon" src={GitIcon} alt="GitIcon"/>
                </div>
                <p>and more...</p>
            </div>
        </div>
        <div className="knowledge">
            <h3>Knowledge</h3>
            <div className="knowledge-list">
                {knowledgeItems.map((item)=>(
                    <div key={item} className="knowledge-item">
                        <img src={Checkmark} alt="Checkmark"/>
                        <p>{item}</p>
                    </div>
                )
                )}
            </div>
        </div>
        </>
    )
}

export default Resume;