import React from 'react'

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
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="about">About</a>
                        <a className="nav-item nav-link " href="portfolio">Portfolio</a> 
                        <a className="nav-item nav-link" href="contact">Contact</a>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Nav
