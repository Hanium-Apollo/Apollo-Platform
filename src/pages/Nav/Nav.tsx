import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/images/logoname.png';
import '../../assets/css/Nav.css';


function Nav(){


    return (
        <nav className='navbar'>
            <Link to="/">
            <img src={logo} className="navbar_logo" alt="logo" />
            </Link>
            <div className='navbar_name'>
                닉네임
            </div>
        </nav>
    )
}

export default Nav;