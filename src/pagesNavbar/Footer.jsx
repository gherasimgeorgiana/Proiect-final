import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <section className='footer'>
      <div className='footer-info'>

        <ul>
          <li><h4><strong>COMPANIE</strong></h4></li>
          <br />
          <li>Despre Noi</li>
          <li>Contact</li>
          <li>Q&A</li>
        </ul>
      </div>

      <div className='footer-info'>

        <ul>
          <li><h4><strong>SERVICII</strong></h4></li>
          <br />
          <li>Asigurări RCA</li>
          <li>Asigurări CASCO</li>
          <li>Asigurări Locuințe</li>
          <li>Asigurări Călătorie</li>
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
