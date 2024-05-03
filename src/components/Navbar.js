import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { Link, BrowserRouter as Router } from 'react-router-dom';

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
                        <Link  onClick={() => handleLinkClick("home")} > HOME</Link>
                        <Link onClick={() => handleLinkClick("about")}> ABOUT </Link>
                        <Link onClick={() => handleLinkClick("projects")}> PROJECTS </Link>
                        <Link> RESUME </Link>
                    </a>
                </div>
            </div>
    )
}
export default Navbar;
