import React, { useRef, useEffect, useState } from 'react';
import Headshot from '../assets/photos/Headshot.jpg';
import "../styles/About.css";

function About() {
    
    return (
        <div id='about' className='about'>
            <div className='text'>
                <h1 className='header'>
                    Hello! ☺
                </h1>
                <p className='description'>
                    👋 My name is <strong>Doris</strong>! <br/>
                    <br/>
                    📚 I'm currently studying <strong>Computer Science</strong> at the <strong>University of British Columbia</strong>.
                    <br/>
                    <br/>
                    👩🏻‍💻 I'm particularly interested in <strong>software development</strong> and <strong>AI/ML</strong>, but eager to explore!
                    <br/>
                    <br/>
                    🎤 In my free time, I enjoy singing and trying new foods!
                </p>
            </div>
            <div className='headshot'>
                <img src={Headshot} alt="Headshot" />
            </div>
        </div>
    );
}

export default About;
