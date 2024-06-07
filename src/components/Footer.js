import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css";
import Contact from "../components/Contact"

function Footer() {
  return (
    <div className="footer">
      <div className='bottom-centre'>
        <div className='thanks'>
          Thanks for stopping by my portfolio! 𐙚
        </div>
        <div className='contact'>
        <Contact></Contact>
        </div>
        
        
        <div className = 'tag'>
          Made with 🩵 by Doris Zhang
        </div>
      </div>
        
    </div>
  );
}

export default Footer