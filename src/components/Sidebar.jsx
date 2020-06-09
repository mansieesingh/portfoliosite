import React from 'react';
import '../css/sidebar.css';
import AboutIcon from '../icons/social.svg';
import ResumeIcon from '../icons/business.svg';
import Education from '../icons/file.svg';
import ContactIcon from '../icons/signs.svg';

const Sidebar = () => {
    return(
        <div class="sidebar">
        <div class="sidebar-item"><img src={AboutIcon}></img><span>About</span></div>        
        <div class="sidebar-item"><img src={ResumeIcon}></img><span>Resume</span></div>
        <div class="sidebar-item"> <img src={Education}></img><span>Education</span></div>
        <div class="sidebar-item"><img src={ContactIcon}></img><span>Contact</span></div>
        </div>
    )
}

export default Sidebar;