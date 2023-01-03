import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <section className='footer'>
      <div className='footer-info'>

        <ul>
          <li><h4><strong>COMPANIE</strong></h4></li>
          <br />
          <li>Despre Noi</li>
          <Link to="/contact">Contact</Link>
          <li>Q&A</li>
        </ul>
      </div>

      <div className='footer-info'>

        <ul>
          <li><h4><strong>SERVICII</strong></h4></li>
          <br />
          <Link to="/rca">Asigurări RCA</Link>
          <Link to="casco">Asigurări CASCO</Link>
          <Link to='house'>Asigurări Locuințe</Link>
          <Link to="travel">Asigurări Călătorie</Link>
        </ul>
      </div>

      <div className='footer-info'>

        <ul>
          <li><h4><strong>CONTACTEAZĂ-NE</strong></h4></li>
          <br />
          <li>0747 124 446</li>
          <li>georgiana.gherasim@destine-broker.ro</li>
          <li>9-20 | Luni - Sâmbată</li>

        </ul>
      </div>

    </section>
  )
}
