import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { Link, BrowserRouter as Router } from 'react-router-dom';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    useEffect(() => {
        setExpandNavbar(false);
    }, []);

    return (
            <div className="navbar" id={expandNavbar ? "open" : "close"}>
                <div className="links">
                    <a className="pages">
                        <Link to="/"> HOME</Link>
                        <Link to="/aboutme"> ABOUT </Link>
                        <Link to="/projects"> PROJECTS </Link>
                        <Link> RESUME </Link>
                    </a>
                </div>
            </div>
    )
}
export default Navbar;
