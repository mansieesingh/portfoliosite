import React from 'react';
import About from './About';
import Resume from './Resume';
import '../../css/secondarysection.css';
const SecondarySection = () => {
    return(
        <div className="secondary-section">
        {/* <About/> */}
        <Resume /> </div>
    )
}

export default SecondarySection;