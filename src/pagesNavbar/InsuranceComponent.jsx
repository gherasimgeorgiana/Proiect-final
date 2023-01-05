import React from 'react';
import { Link } from 'react-router-dom';
import './InsuranceComponent.css'

export function InsuranceComponent(props) {
  const { Title, Poster, id } = props;

  return (
    <Link to={`/complet/insurance-details/${id}`}>
      <li>
        <article className='insurance-item'>
          <img src={Poster} alt="Asigurare" height={200} />

          <h3 className='insurance-item__title'>{Title}</h3>
          {/* <button className='insurance-btn'>{Details}</button> */}
        </article>
      </li>
    </Link>
  );
}
