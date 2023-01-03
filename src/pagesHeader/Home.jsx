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
        
            <h3>Te anunțăm când expiră!</h3>
            <p>Ești mereu la curent cu documentele care expiră. Poți înregistra când expiră polița RCA, CASCO, ITP, PAD chiar și buletinul.</p><br />            
            <h3>Economisești timp</h3>
            <p>Reînnoiești polița RCA direct de pe site și asa economisești timp, deoarece ai deja datele salvate în cont.</p><br />
            <h3>Reduci costurile</h3>
            <p>Știi mereu când să iți reînnoiești polița și asa eviți o amendă.</p>
        </div>
    </section>
    )
}