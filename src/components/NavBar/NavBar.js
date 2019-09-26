import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component{
    render(){
        return(
            <div>
                <nav>
                    <div className="nav-wrapper blue-grey darken-2">
                    <a href="/" className="brand-logo center">Logo</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/candidates">Candidates</Link></li>
                        <li><Link to="/positions">Open Positions</Link></li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;