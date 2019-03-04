import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="ui secondary  menu">
            <div className="ui container">
                <center>
                    <a href="/">
                        <img src="img/koompi-logo-w-01.svg" height="35px" alt="koompi" className="mobile hidden"/>
                        <img src="img/koompi-logo-w-02.svg" height="35px" alt="koompi" className="mobile only"/>
                    </a>
                </center>
                <div className="menu right">
                    <NavLink className="item navbarTop menuFadeIn" to="/feature">Feature</NavLink>
                    <NavLink className="item navbarTop menuFadeIn" to="/about-us">About</NavLink>
                    <div className="item">
                        <i className="fas fa-times btnAnimationClose"></i>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default Navbar;