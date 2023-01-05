import {Link, useMatch, useResolvedPath} from "react-router-dom";
import Logo from '../images/logo.svg';
import { FaRegUser } from "react-icons/fa";
import './Header.css';
import { useContext } from "react";
import { AuthContext } from "./auth/Auth-context";

export default function Header() {
    const { logOut } = useContext(AuthContext);
    return( 
        <header className='header-page'>
            <Link to="/" >
            <img className='logo' src={Logo} height={80} width={150} alt='Logo Destine Broker' />
            </Link>
            
            <Link>
                 <button className="btn-access" type='button' onClick={(e) =>{
                    e.preventDefault();
                    window.open('https://www2.platforma-broker.ro/', '_blank');
                }}> Acces Platformă
                </button>               
            </Link>
            <ul>
                <CustomLink to="/mementos">Memento</CustomLink>
                <CustomLink to="/infoDaune">Info Daune</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>

                <div className="dropdown">
                    <button className="dropbtn"><FaRegUser /></button>
                    <div className="dropdown-content">
                    <CustomLink to='/login'><button> Log In</button></CustomLink>
                    <CustomLink to='/'><button onClick={logOut}>LogOut</button></CustomLink> 
                    </div>
                </div>
            </ul>

        </header>
    )
}

function CustomLink ({to, children, ...props}) {
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({path: resolvedPath.pathname, end:true})

    return(
        <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
        </Link>
        </li>

    )
}