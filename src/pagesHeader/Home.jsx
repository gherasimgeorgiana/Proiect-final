import React from "react";
import home from '../../src/images/svg/home.jpg';
import './Home.css';

export default function Home() {
    return (
    <section className="home-container">
        <img className="img-home" src={home} alt='Peisaj cu masina'/>
        
        <div className="home">
        <h1>Rămâi la curent cu documentele care expiră și află valabilitatea acestora</h1>
        <br />
        <p> Poți verifica oricând valabilitatea poliței tale RCA, PAD, valabilitatea ITP-ului și a rovinietei pe site-urile oficiale.</p>
        <br />
        <p>Dacă iți creezi cont poți chiar înregistra aceste date și noi te anunțăm cand iți expiră.</p>
        <br />
        
            <h3>Te anuntam cand expira!</h3>
            <p>Esti mereu la curent cu documentele care expira. Poti inregistra cand expira polita RCA, CASCO, ITP, PAD chiar si buletinul.</p><br />            
            <h3>Economisesti timp</h3>
            <p>Reinnoiesti polita RCA direct de pe site si asa economisesti timp, deoarece ai deja datele salvate in cont.</p><br />
            <h3>Reduci costurile</h3>
            <p>Stii mereu cand sa iti reinnoiesti polita si asa eviti o amenda.</p>
        </div>
    </section>
    )
}