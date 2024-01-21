import React from 'react';
import './Header.css';
import home from '../images/home.gif'


const Header = () => {
  return (
    <div>
        <header>
            <div className="name">Tejaswi Manchineella</div>
            <div className="options">
                <span>Projects</span>
                <span>Experience</span>
                <span>Contact</span>
                {/* <span>Option 4</span> */}
            </div>
        </header>
        <div className="body">
            <div className='body-left'>
                <p>
                As a Full Stack Developer with 5+ years of experience, I have a deep understanding of both front-end and back-end development. I
                have expertise in developing web applications using a variety of programming languages and frameworks, including python, Java,
                JavaScript, ReactJS, and NodeJS. I have experience in designing and implementing scalable and secure web applications that
                meet client needs. Additionally, I have excellent problem-solving skills, the ability to work in a fast-paced environment, and a
                commitment to delivering high-quality work on time.
                </p>
                <button className='button'>See my Resume</button>
            </div>
            
            <img
                src={home}
                alt="Placeholder Image"
            />
        </div>
    </div>
    
  );
};

export default Header;
