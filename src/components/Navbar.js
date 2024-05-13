import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Resume from "../assets/Zhang_Doris_Resume.pdf"

function onResumeClick() {
    window.open(Resume);
}

function Navbar() {

    
    const handleLinkClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 50, // Adjust the offset as needed
                behavior: "smooth"
            });
        }
        setExpandNavbar(false); // Close the navbar after clicking a link
    };
    

    const [expandNavbar, setExpandNavbar] = useState(false);

    useEffect(() => {
        setExpandNavbar(false);
    }, []);

    return (
            <div className="navbar" id={expandNavbar ? "open" : "close"}>
                <div className="links">
                    <a className="pages">
                        <Link className="home-link" onClick={() => handleLinkClick("home")} to="/" > HOME</Link>
                        <Link className="about-link" to="/" onClick={() => handleLinkClick("about")}  href="about"> ABOUT </Link>
                        <Link className="projects-link" onClick={() => handleLinkClick("projects")}> PROJECTS </Link>
                        <Link className="resume-link" onClick= {onResumeClick}> RESUME </Link>
                    
                    </a>
                </div>
            </div>
    )
}
export default Navbar;
