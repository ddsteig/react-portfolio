import React from 'react';
import { withRouter } from 'react-router-dom';

const Header = (props) => {

    const pathname = props.location.pathname.slice(1)
    const path = pathname.charAt(0).toUpperCase() + pathname.slice(1)
    return (
        <React.Fragment>
            <header>
                <h1>{path}</h1>
            </header>
        </React.Fragment>
    )

}

export default withRouter(Header);