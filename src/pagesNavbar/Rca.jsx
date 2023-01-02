import React from "react";
import '../App.css';


export default function Rca() {
    return (
        <section>
            <div>
                <button className="btn-rca" type='button' onClick={(e) => {
                    e.preventDefault();
                    window.open('https://www.aida.info.ro/polite-rca', '_blank');
                }}> <strong>Verifică RCA</strong>
                </button>
            </div>

            <div className="rca-info">
                <h1>Ce este asigurarea de raspundere civila auto?</h1>
                <p>Polița de Răspundere Civilă Auto (RCA) este o asigurare obligatorie prin lege, pe care orice șofer trebuie să o încheie pentru vehiculul său. Prin intermediul poliței RCA, cei ce au suferit prejudicii în urma unui accident rutier produs din vina șoferului asigurat pot primi despăgubiri pentru daunele materiale, decesul/vătămările corporale suferite sau pagubele aduse proprietăților.
                    <br /><br />
                    Dacă ești vinovat de producerea unui accident rutier, polița ta RCA intervine să acopere daunele produse păgubitului, oferindu-i acestuia compensații, indiferent de situația ta materială sau de locul unde s-a produs accidentul.</p>
                <br />

                <h1>Riscuri asigurate</h1>
                <p>Conform legislației în vigoare, asigurarea RCA nu se adresează titularului, ci terțelor persoane păgubite de acesta. Printre riscurile acoperite de polița RCA, se regăsesc:
                    <br />
                    • vătămările corporale sau decesul celui pe care l-ai accidentat;<br />
                    • orice tip de pagube materiale pe care le-ai provocat (de exemplu, ai avariat un vehicul, un imobil, un stâlp etc.);<br />
                    • pagubele rezultate din lipsa de folosință a vehiculului avariat;<br />
                    • iar în cazul unui proces, cheltuielile de judecată plătite de către cel nevinovat de producerea pagubelor.</p><br />

                <h1>Restituirea primei de asigurare RCA</h1>
                <p>În situația în care ai radiat sau ai vândut mașina asigurată, poți solicita companiei de asigurări restituirea primei de asigurare RCA. Dreptul la restituirea primei RCA se pierde, însă, dacă a fost avizată (se află în derulare un dosar de daună) sau plătită o daună pe asigurarea respectivă.<br /><br />
                    Pentru restituirea primei care acoperă data dintre radierea mașinii și data expirării poliței RCA, ai nevoie de următoarele documente:
                    <br />
                    • copia certificatului de radiere, ștampilat și data de Poliție;<br />
                    • polița de asigurare RCA în original;<br />
                    • copia documentului care atestă plața poliței RCA (chitanță/OP);<br />
                    • cerere tip de restituire completată semnată și, în cazul persoanelor juridice, ștampilată;<br />
                    • extras de cont pe numele asiguratului.</p><br />

                <h1>Sistemul Bonus-Malus</h1>
                <p>Pe scurt, sistemul Bonus-Malus influențează evoluția primei de asigurare în funcție de istoricul rutier al șoferului.
                    Concret, sistemul Bonus-Malus îi „recompensează” pe proprietarii ai căror mașini nu au fost implicate în accidente, oferindu-le reduceri la prima RCA (Bonus), și îi „penalizează” pe șoferii care au produs unul sau mai multe accidente rutiere vor fi “sancționați” printr-o creștere a primei RCA (Malus).<br /><br />

                    Cu alte cuvinte, prețul asigurării crește sau scade în funcție de istoricul rutier de daune al șoferului.<br /><br />

                    Dacă șoferul a fost vinovat de producerea unor accidente pe parcursul anului precedent, va plăti mai mult la încheierea poliței RCA. Dacă nu a fost vinovat de producerea unor accidente rutiere, va beneficia de o reducere la plata primei și, implicit, va achita un preț mai mic la încheierea asigurării RCA.<br /><br />

                    Potrivit legislației în vigoare, în situația în care o persoană fizică asigurată RCA deține mai multe vehicule, acesta beneficiază de aceeași clasă a sistemului Bonus-Malus pentru toate vehiculele, respectiv de cea mai favorabilă asiguratului. În cazul persoanelor juridice, sistemul Bonus-Malus se aplică pentru fiecare vehicul în parte. <br /><br />

                    În caz de daună se scad 2 clase. Bonusul se aplică după urmatoarea regulă: un șofer urcă o clasă de bonus la fiecare an calendaristic in care este asigurat fara sa aiba evenimente/daune provocate.
                </p><br />

                <h1>Decontarea directă</h1>
                <p>Decontarea directă reprezintă o clauză opțională pe care o poți atașa contractului tău RCA.<br /><br />

                    Aceasta presupune faptul că, după un accident rutier, proprietarul mașinii păgubite are opțiunea de a merge la propriul asigurător RCA pentru a-și recupera prejudiciu, urmând ca asigurătorul său să recupereze suma plătită de la asigurătorul şoferului vinovat.<br /><br />

                    Clauza nu limitează în vreun fel dreptul șoferului păgubit de a merge direct la asigurătorul șoferului care este vinovat, pentru a-și recupera prejudiciul.<br /><br />

                    Aşadar, decontarea directă este un serviciu pe care îl poţi achiziţiona împreună cu poliţa ta RCA şi care îţi permite să îţi repari maşina la asigurătorul tău, dacă eşti implicat într-un accident rutier unde vina nu a fost a ta şi doar dacă sunt întrunite câteva condiții:<br /><br />

                    • accidentul auto s-a produs pe teritoriul României;<br />
                    • vehiculele implicate în accident sunt înmatriculate / înregistrate în România;<br />
                    • prejudiciile sunt produse exclusiv vehiculelor;<br />
                    • nu există vătămări corporale sau decese;<br />
                    • ambele vehicule implicate în accident au asigurare RCA valabilă la data evenimentului.
                </p>
            </div>

        </section>
    )
}