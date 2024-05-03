import React from 'react'
import Headshot from '../assets/photos/Headshot.jpg';
import "../styles/About.css";

function About() {
  return (
    <div id='about' className='about'>
        <div className='text'>
            <h1 className='header'>
                Hello! ｡･:*˚:✧｡
            </h1>
            <p className='description'>
                My name is Doris. I'm a second-year Computer Science student at the University of British Columbia. My primary languages are Java and Python. I am a motivated and proactive learner, always seeking a challenge and new opportunities to grow!
            </p>
        </div>
        <div className='headshot'>
            <img src={Headshot} />
        </div>
    </div>
  )
}

export default About