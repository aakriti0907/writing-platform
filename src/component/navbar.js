import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            
                <li>
                    <NavLink exact activeStyle={{color: "red"}} to = "/signup">Signup</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{color: "red"}} to = "/login">Login</NavLink>
                </li>
                
            
        </nav>
    )
}

export default Navbar;