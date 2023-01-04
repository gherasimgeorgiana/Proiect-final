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
          <li><h4><strong>UTILE</strong></h4></li>
          <br />
          
          <Link>
          <button
          className='btn-utile'
          onClick={(e) =>{e.preventDefault();
          window.open("https://www.asfromania.ro/", "_blank");
          }}>
          ASF
          </button>
          </Link>

          <Link>
          <button
          className='btn-utile'
          onClick={(e) =>{e.preventDefault();
          window.open("https://www.aida.info.ro/", "_blank");
          }}>
          AIDA
          </button>
          </Link>

          <Link>
          <button
          className='btn-utile'
          onClick={(e) =>{e.preventDefault();
          window.open("https://www.baar.ro/", "_blank");
          }}>
          BAAR
          </button>
          </Link>

          <Link>
          <button
          className='btn-utile'
          onClick={(e) =>{e.preventDefault();
          window.open("https://www.paidromania.ro/", "_blank");
          }}>
          PAID
          </button>
          </Link>
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
