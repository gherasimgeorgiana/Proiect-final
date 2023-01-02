import {Link, useMatch, useResolvedPath} from "react-router-dom";
import Logo from '../images/logo.svg';
import './Header.css';

export default function Header() {
 
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
                <CustomLink to="/infoDaune">Informații Daune</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
                <CustomLink to="/login">Login</CustomLink> 
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