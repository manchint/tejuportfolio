import React from 'react';
import Header from './Header';
import gvsu from '../images/gvsu.jpeg'
import svecw from '../images/svecw.png'

const Education = () => {
  return (
    <div>
      <div className='education'>
            <img
                src={gvsu}
                alt="GVSU Image"
            />
            <div className='education-desc'>
                <span><strong>Grand Valley State University, Michigan, USA</strong></span>
                <ul>
                  <li>Master's in Applied Computer Science</li>
                  <li>Secured a GPA of 3.77</li>
                </ul>
                {/* <span className=''>Master's in Applied Computer Science</span> */}
            </div>
            <span>January 2022 - April 2023</span>
      </div>
      <div className='education'>
            <img
                src={svecw}
                alt="GVSU Image"
            />
            <div className='education-desc'>
                <span><strong>Shri Vishnu Engineering College For Women, Andhra Pradesh, INDIA</strong></span>
                <ul>
                  <li>Bachelor's in Computer Science</li>
                  <li>Secured a GPA of 75.12%</li>
                </ul>
                {/* <span className=''>Master's in Applied Computer Science</span> */}
            </div>
            <span>October 2013 - April 2017</span>
      </div>
    </div>
  );
};

export default Education;
