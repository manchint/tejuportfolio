import React from 'react';
import './Header.css';
import home from '../images/home.gif';

const Home = () => {
    const openResumeLink = () => {
        window.open('https://drive.google.com/file/d/16z1rCrT2igi63UKjMIE-8chp2yCt7Bdq/view?usp=sharing')
    }
    return (
        <div className="body">
            <div className='body-left'>
                <p>
                As a Full Stack Developer with 5+ years of experience, I have a deep understanding of both front-end and back-end development. I
                have expertise in developing web applications using a variety of programming languages and frameworks, including python, Java,
                JavaScript, ReactJS, and NodeJS. I have experience in designing and implementing scalable and secure web applications that
                meet client needs. Additionally, I have excellent problem-solving skills, the ability to work in a fast-paced environment, and a
                commitment to delivering high-quality work on time.
                </p>
                <button className='button' onClick={openResumeLink}>See my Resume</button>
            </div>
            
            <img
                src={home}
                alt="Placeholder Image"
            />
        </div>
    )
}

export default Home;