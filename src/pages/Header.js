import React from 'react';
import './Header.css';



const Header = () => {
  return (
    <div className='home-page'>
        <header>
            <div className="name">Tejaswi Manchineella</div>
            <div className="options">
                <span>Projects</span>
                <span>Experience</span>
                <span>Contact</span>
                {/* <span>Option 4</span> */}
            </div>
        </header>
    </div>
    
  );
};

export default Header;
