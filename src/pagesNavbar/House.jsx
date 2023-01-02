import '../App.css';
import BackToTopButton from '../backToTopButton/BackToTopButton';

export default function House() {
    return (
        <section className='house-container'>
            <div>
                <button className="btn-house" type='button' onClick={(e) => {
                    e.preventDefault();
                    window.open('https://www.paidromania.ro/myPad/flow/', '_blank');
                }}><strong>Verifică PAD</strong>
                </button>
            </div>

            <div className="house-info">
                <h1>Asigurarea de locuință (PAD)</h1>
                <p>
                    Ești obligat prin lege să îți asiguri locuința. În caz contrar, poți fi amendat. Potrivit legii, proprietarii care nu și-au asigurat locuința nu vor beneficia de ajutor din partea autorităților locale, în cazul producerii unor calamități naturale. În România, una dintre cele mai expuse țări la dezastre naturale, probabilitatea producerii unor astfel de riscuri (cutremure, inundații, alunecări de teren) este extrem de ridicată.<br /><br />

                    Asigurarea obligatorie a locuinței oferă protecție în cazul producerii unor inundații, alunecări de teren sau cutremure. <br /><br />
                    Exista doua tipuri de locuinte in Romania, iar predilectia cetatenilor este majoritar spre una dintre ele, locuinta de tip A preferata de cei mai multi si locuinta de tip B.<br /><br />

                    Pentru ambele tipuri de locuinte, costul politei pentru asigurarea locuintei obligatorie se prezinta astfel:<br /><br />

                    • <strong>locuintele de tip A, costul politei PAD - 20 EUR/an</strong> (din beton armat sau metal, ce poate avea pereti exteriori din caramida arsa, piatra, beton, cu sau fara cadre de beton armat, lemn ori alte materiale asemanatoare rezultate in urma unui tratament chimic);<br />

                    • <strong>locuintele de tip B, costul politei PAD - 10 EUR/an</strong> (din caramida nearsa, valatuci, chirpici, pamant batut ori alte materiale asemanatoare, ce nu au fost anterior supuse unui tratament termic sau chimic).<br /><br />

                    În schimbul unei prime anuale modice (10 sau 20 de euro, în funcție de tipul locuinței), poți primi, în cazul producerii unui risc acoperit de polița obligatorie, o despăgubire de până la 20.000 de euro, sumă care te poate ajuta să acoperi măcar o parte din pagubele produse de riscul respectiv. </p><br /><br />

                <h1>Asigurarea de locuință facultativă</h1>
                <p>
                    Asigurarea facultativă a locuinței este un produs prin care se pot asigura în întregime apartamente, case sau imobile, împotriva producerii anumitor riscuri prevăzute în contractul încheiat între compania de asigurări și asigurat. Odată încheiată o poliță facultativă, asigurătorul se obligă ca, în schimbul unei prime pe care trebuie să o achiți, să te despăgubească, în cazul producerii riscurilor prevăzute în poliță.<br /> <br />

                    O astfel de poliță facultativă, împreună cu polița obligatorie PAD, te ajută să îți protejezi locuința, la valoarea ei reală, împotriva mai multor riscuri. <strong>Polita facultativă de locuință nu este valabilă fără polita obligatorie PAD.</strong></p><br />

                <h3>Ce riscuri acoperă asigurarea facultativă?</h3>

                <p>În funcție de tipul asigurării facultative contractate, poți adăuga riscurilor de bază (în cazul în care compania de asigurări care a emis polița facultativă permite acest lucru) și alte tipuri de riscuri (opționale sau extinderi). <br /> <br />
                    Înaintea altor tipuri de riscuri, îți spunem care sunt riscurile de bază (sau riscurile standard, așa cum mai sunt cunoscute) preluate de asigurarea facultativă a locuinței:<br />

                    • incendiul;<br />
                    • trăsnetul;<br />
                    • explozia;<br />
                    • căderea de corpuri pe locuința asigurată;<br />
                    • cutremurul;<br />
                    • riscurile atmosferice (furtună, grindină, ploaie torențială, inundație, viitură, greutatea stratului de zăpadă, greutatea stratului de gheață, avalanșă, etc.);<br />
                    • alunecările și/sau prăbușirile de teren;<br />
                    • apa de conductă și refularea acesteia;<br />
                    • coliziunea cu autovehiculele;<br />
                    • vandalismul;<br />
                    • distrugerile provocate de animale;<br />
                    • furtul bunurilor și al elementelor constructive;<br />
                    • avariile centralelor termice;<br />
                    • alte tipuri de costuri suplimentare necesare efectuării reparațiilor.<br /><br /> </p>

                <h3>Cum funcționează o asigurare facultativă?</h3>

                <p>
                    În cazul producerii unui eveniment asigurat, anunță, în cel mai scurt timp posibil, organele abilitate: Poliția (în caz de efracție), Pompierii (în caz de incendiu), etc., care vor întocmi procesele verbale de constatare sau de cercetare. Apoi, informează compania sau brokerul de asigurări la care ai încheiat polița facultativă, cu privire la producerea evenimentului acoperit de asigurarea facultativă.<br /><br />

                    Avizarea daunei (anunțarea companiei de asigurări cu privire la daunele înregistrate) se face telefonic. Ca asigurat, apelezi Call Center-ul de daune (numărul de telefon poate fi găsit pe site-ul companiei de asigurări). Pentru avizare, trebuie să ai la îndemână polița facultativă, pentru că va trebui să furnizezi diverse informații necesare companiei de asigurări (numărul asigurării facultative, etc.).<br /><br />

                    Apoi, un reprezentant al companiei de asigurări va constata daunele produse și va propune soluții de reparație/înlocuire. După aceea, trebuie să completezi cererea de despăgubire și să o depui la compania de asigurări. Conform poliței și legislației în vigoare, plata despăgubirilor se efectuează după 10-30 de zile de la data depunerii documentației complete.

                </p>

            </div>
            <BackToTopButton />
        </section>
    )
}