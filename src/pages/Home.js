import React, { useEffect, useRef } from 'react';
import "../styles/Home.css";
import "../styles/About.css";
import "../styles/Projects.css";
import Typewriter from "typewriter-effect";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import About from './About';
import Projects from './Projects';
import Resume from "../assets/Zhang_Doris_Resume.pdf"
import Footer from '../components/Footer';


function onResumeClick() {
  window.open(Resume);
}


function Home() {

  return (
   <div className='wrapper'>
    <div id='home' className='home'>
        <div className="intro">Hello, I'm Doris.</div>
        <div className="prompt"> 
                   
                    <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                    .changeDelay(100)
                    .typeString("I am a ")
                    .typeString("Computer Science Student".italics())
                    .pauseFor(1500)
                    .deleteChars(24)
                    .typeString("Creator".italics())
                    .pauseFor(1500)
                    .start();
                    
                   
                }}
                options={{
                  loop:true
                }}
            />  
                <div className="buttons">
                   
                <button className='media' onClick={() => window.open('https://github.com/DorisWZhang')}>
                <GitHubIcon style={{ fontSize: '45px', color: 'white' }}/></button>
                <button className='media' onClick={() => window.open('https://www.linkedin.com/in/doris-zhang-b3837a288/')}>
                <LinkedInIcon style={{ fontSize: '45px', color: 'white' }}/></button>
            
                <button className='resume' onClick={onResumeClick}><span>RESUME</span></button>   
             </div>
                
            </div>
            </div>
      <div id="about" className="about">
        <About/>
      </div>

      <div id="projects" className="projects">
        <Projects/>
      </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default Home