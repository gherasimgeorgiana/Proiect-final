import './Navbar.css';
import {Link} from "react-router-dom";
import { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    return( 
       
        <nav className='nav'>
           
            <ul className={isMobile ? 'nav-item-mobile' : 'nav-item'}
            onClick={() => setIsMobile(false)}>
                <Link to="/rca"><li className='item' >Asigurare RCA</li></Link> 
                <Link to="/casco"><li className='item'>Asigurare CASCO</li></Link>
                <Link to="/house"><li className='item'>Asigurare Locuință</li></Link>
                <Link to="/travel"><li className='item'>Asigurare Călătorie</li></Link>
                <Link to="/complet"><li className='item'>Toate Asigurările</li></Link>
            </ul>
            <button 
            className='mobile-menu'
            onClick={() => setIsMobile(!isMobile)}
            >    
                {isMobile ? (
                    <FaTimes />
                ) : (
                    <FaBars />
                )}
                 
            </button>
        </nav>
    
   
    )
}

