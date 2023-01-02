import React, { useEffect, useState } from 'react';
import { InsuranceComponent } from './InsuranceComponent';
import './InsuranceList.css';

export function InsuranceList() {
  const url = 'http://localhost:3001/insurance';
  const [insurance, setInsurance] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((insuranceFromServer) => setInsurance(insuranceFromServer));
  }, []);



  return (
    <section>

      <ul className='insurance-list'>
        {insurance.map((insurance) => {
          return (
            <InsuranceComponent
              Poster={insurance.Poster}
              Title={insurance.Title}
              Details={insurance.Details}
              id={insurance.id}
              key={insurance.id}
            ></InsuranceComponent>
          );
        })}

      </ul>
    </section>
  );
}
