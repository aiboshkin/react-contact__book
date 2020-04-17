import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <ul>
                <li><Link to="/">Contact list</Link></li>
                <li><Link to="/add">Add contact</Link></li>
            </ul>
        </div>
    )
}

export default NavBar