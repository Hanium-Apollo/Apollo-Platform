import React, {useState}  from 'react';
import { useNavigate, Link} from 'react-router-dom';
import logo from '../../assets/images/logoname.png';
import '../../assets/css/Nav.css';


function Nav(){
    const [isLogin, setIsLogin] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const GotoMain = () => {
        navigate('/'); // Navigate to another route
    };

    const GotoFail = () => {
        // Handle logout logic
        navigate('/fail'); // Navigate to login page
    };
    const GotoSuccess = () => {
        // Handle logout logic
        navigate('/success'); // Navigate to login page
    };
    const toggleDropdown = () => {
    setIsOpen(!isOpen);
    };

    return (
        <nav className='navbar'>
            <Link to="/">
            <img src={logo} className="navbar_logo" alt="logo" />
            </Link>
            <div className='dropdown'>
                <button className="dropdown-toggle" onClick={toggleDropdown}>
                닉네임
                </button>
                {isOpen && (
                    <ul className="dropdown-menu">
                        <li onClick={GotoMain} style={{ cursor: 'pointer' }}>Home</li>
                        <li onClick={GotoFail} style={{ cursor: 'pointer' }}>Fail</li>
                        <li onClick={GotoSuccess} style={{ cursor: 'pointer' }}>Success</li>
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Nav;