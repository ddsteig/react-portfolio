import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <React.Fragment>
            <nav id="navigation" className="navbar navbar-expand-lg navbar-light">
                <span className="navbar-brand">Danny Steiger <i className="fa fa-anchor" ></i></span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    to="/react-portfolio/about"
                                    className={window.location.pathname === "/react-portfolio/about" ? "nav-link active" : "nav-link"}
                                >
                                    About                                    
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/react-portfolio/portfolio"
                                    className={window.location.pathname === "/react-portfolio/portfolio" ? "nav-link active" : "nav-link"}
                                >
                                    Portfolio                                    
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/react-portfolio/contact"
                                    className={window.location.pathname === "/react-portfolio/contact" ? "nav-link active" : "nav-link"}
                                >
                                    Contact                                    
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Nav
