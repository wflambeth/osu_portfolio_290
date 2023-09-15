import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <span className="nav-span"><Link to="/">Home</Link></span>
            <span className="nav-span"><Link to="/add">Add Exercise</Link></span>
        </nav>
    );
}

export default Navigation;