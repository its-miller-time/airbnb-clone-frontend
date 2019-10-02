import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

class NavBar extends Component{
    render(){
        return(
            <div className="nav">
                <nav className="nav transparent">
                    <div className="nav transparent yllow">
                    <a href="/" className="yllow brand-logo center"></a>
                    <ul id="" className="n">    
                        <li className="nav"><Link to="/">HOME</Link></li>
                        <li><Link to="/candidates">CANDIDATES</Link></li>
                        <li><Link to="/employerHome/positions">OPEN POSITIONS</Link></li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;