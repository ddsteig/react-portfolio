import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <React.Fragment>
            <nav id="navigation" className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand">Danny Steiger <i className="fa fa-anchor" ></i></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    to="/about"
                                    className={
                                        window.location.pathname === "/" || window.location.pathname === "/about"
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    About
            </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/portfolio"
                                    className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                                >
                                    Portfolio
            </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/contact"
                                    className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                                >
                                    Contact
            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Nav
