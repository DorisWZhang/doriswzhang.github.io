import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { NavLink } from 'react-router-dom';
import Resume from "../assets/Zhang_Doris_Resume.pdf";

function onResumeClick() {
    window.open(Resume);
}

function Navbar() {
    const handleLinkClick = (id) => {
        if (window.location.pathname !== "/doriswzhang.github.io") {
            // If not on home page, redirect to home page and scroll after it's loaded
            window.location.href = "/doriswzhang.github.io";
            window.onload = () => {
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }, 100); // Adjust the delay as needed
        };
            
        } else {
            // If on home page, scroll directly
            scrollToSection(id);
        }
        setExpandNavbar(false); // Close the navbar after clicking a link
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 50,
                behavior: "smooth"
            });
        }
    };


    useEffect(() => {
        if (window.location.pathname !== "/doriswzhang.github.io") {
            // If redirected from another page, scroll to the section after the home page is loaded
            const id = window.location.hash.substring(1);
            window.onload = () => {
                scrollToSection(id);
            };
        }
        setExpandNavbar(false);
    }, []);

    const [expandNavbar, setExpandNavbar] = useState(false);

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="links">
                <a className="pages">
                    <NavLink className="home-link" onClick={() => handleLinkClick("home")} to="/doriswzhang.github.io" > HOME</NavLink>
                    <NavLink className="about-link" onClick={() => handleLinkClick("about")} > ABOUT </NavLink>
                    <NavLink className="projects-link" onClick={() => handleLinkClick("projects")}  > PROJECTS </NavLink>
                    <NavLink className="resume-link" onClick={onResumeClick}> RESUME </NavLink>
                    <button className='linkedin' onClick={() => window.open('https://www.linkedin.com/in/doris-zhang-b3837a288/')}>LET'S CONNECT</button>  
            
                </a>
               </div>
        </div>
    );
}

export default Navbar;

