import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  let navigate = useNavigate();
  return (
    <div className='home-page'>
        <header>
            <div className="name">Tejaswi Manchineella</div>
            <div className="options">
                <span onClick={() => navigate('/education')}>Education</span>
                {/* <span onClick={() => navigate('/experience')}>Experience</span> */}
                {/* <span >Experience</span> */}
                <span onClick={() => navigate('/contact')}>Contact</span>
                {/* <span>Option 4</span> */}
            </div>
        </header>
    </div>
    
  );
};

export default Header;
