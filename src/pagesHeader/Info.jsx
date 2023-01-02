import React from "react";
import BackToTopButton from "../backToTopButton/BackToTopButton";

export default function Info() {
    return (
        <section className="info-dauna">
            <h1>Ce am de făcut în caz de daună?</h1>

            <ul>
                <li>● Contacteaza asiguratorul/emitentul politei in cel mai scurt timp sau maxim 24h</li>
                <li>● Mergi la cel mai apropiat centru de constatări al asiguratorului pentru deschiderea dosarului de daună</li>
            </ul>
            <br />
            <h1>Daună RCA</h1>

            <ul>
                <li>● Daca nu sunt vătămări corporale sau mai mult de două autovehicule implicate în eveniment, se completeaza formuralul de constatare amabilă de accident de către ambii conducători auto implicati, în caz contrar se apelează la numărul de urgență <strong>112</strong></li>
                <li>● Deschidera dosarului online sau prin Call Center la asiguratorul vinovatului de eveniment</li>
                <li>● Programarea pentru constatare</li>
                <li>● Constatarea avariilor conform programării la data și în locul stabilit împreună cu cel care face evaluarea pagubele</li>
                <li>● Deplasarea la service cu documentul de intrare în reparative</li>
                <li>● Reparația</li>
                <li>● Închiderea dosarului de daună</li>
            </ul>
            <br />
            <h1>Daună locuință</h1>
            <ul>
                <li>● Deschidera dosarului online sau prin Call Center la asiguratorul vinovatului de eveniment</li>
                <li>● Programarea pentru constatare</li>
                <li>● Constatarea daunelor și întocmirea dosarului de daună</li>
                <li>● Închiderea dosarului de daună</li>
                <li>● Plata despăgubirii</li>
            </ul>
            <br />
            <h1>Important!</h1>
            <ul>
                <li>În caz de furt se vor alerta autoritățile în termen de maxim 24 h de la momentul constatării evenimentului, și în maxim 48 h societatea de asigurare, emitentă a contractului de asigurare.</li>
            </ul>
            <BackToTopButton />
        </section>
    )
}