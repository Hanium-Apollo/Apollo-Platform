import {useState}  from 'react';
import { useNavigate, Link} from 'react-router-dom';
import logo from '../../assets/images/logoname.png';
import '../../assets/css/Nav.css';
import { handleLogout } from '../MainPage/components/LoginButton';

function Nav(){

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
    const GotoDeployList = () => {
        navigate('/deploy');
    }
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    

    return (
        <nav className='navbar'>
            <Link to="/">
            <img src={logo} className="navbar_logo" alt="logo" />
            </Link>
            <div className='dropdown'>
                {localStorage.getItem("isLogin") && <button className="dropdown-toggle" onClick={toggleDropdown}>
                User
                </button>}
                
                {isOpen && (
                    <ul className="dropdown-menu">
                        <li className="menu" onClick={GotoMain} style={{ cursor: 'pointer' }}>Home</li>
                        <li className="menu" onClick={GotoFail} style={{ cursor: 'pointer' }}>Fail</li>
                        <li className="menu" onClick={GotoSuccess} style={{ cursor: 'pointer' }}>Success</li>
                        <li className="menu" onClick={GotoDeployList} style={{ cursor: 'pointer' }}>DeployList</li>
                        <li className="menu" onClick={() => handleLogout()} style={{ cursor: 'pointer' }}>Logout</li>
                        
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Nav;