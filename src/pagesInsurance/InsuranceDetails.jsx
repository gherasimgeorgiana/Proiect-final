import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import './InsuranceDetails.css';

export function InsuranceDetails() {
    const insuranceDetailsUrl = "http://localhost:3001/insurance";
    let { insuranceId } = useParams();
    const [insuranceDetails, setInsuranceDetails] = useState({});

    useEffect(() => {
        fetch(`${insuranceDetailsUrl}/${insuranceId}`)
            .then((response) => response.json())
            .then((insurance) => setInsuranceDetails(insurance))
    }, [insuranceId]);



    return (
        <section className="all-details">
            <img src={insuranceDetails.Poster} alt="Asigurare" height={200} />
            <h2 className="details-title">{insuranceDetails.Title}</h2>          
            <button 
            className="button-details"
            type="button"
            onClick={(e) =>{
                e.preventDefault();
                window.open('https://gherasim-georgiana.smartsales.ro/', '_blank');
            }}
            >{insuranceDetails.Details}</button>
             <article className="insurance-details-article">
                <br/>
            <p>Aici poți intra să iți calculezi asigurarea dorită în funcție de nevoile tale.</p>
                <br/>
            <p>În caz ca ai nevoie de consultanță mă poti contacta la adresa de email: <br/>georgiana.gherasim@destine-broker.ro</p>
             </article>
        </section>
    )
}