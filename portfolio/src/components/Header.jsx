import React from 'react';
import { withRouter } from 'react-router-dom';

const Header = (props) => {
    
    let pathname = props.location.pathname.slice(1)
    if (pathname === 'react-portfolio/') {
        pathname = 'About'
    } else if (pathname === 'react-portfolio/portfolio') {
        pathname = 'Portfolio'
    } else if (pathname === 'react-portfolio/contact') {
        pathname = 'Contact'
    };

    return (
        <React.Fragment>
            <header>
                <h1>{pathname}</h1>
            </header>
        </React.Fragment>
    )

}

export default withRouter(Header);