import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { RiCustomerService2Fill, RiFacebookCircleLine } from "react-icons/ri";


export default function Contact() {
    return (
        <section className="contact">
            <h1>Program de lucru</h1>
            <br />
            <div className="contact-items">
                <RiCustomerService2Fill size='3em' color='cornflowerblue' />
            
                <ul >
                    <li><h4>Luni - Sambata</h4></li>
                    <li>09:00 - 20:00</li>
                    <br />
                    <li><h4>Duminica</h4></li>
                    <li>Închis</li>
                </ul>
                <MdAlternateEmail size='3em' color='cornflowerblue' />
                
                <ul>
                    <li><h4>Contact</h4></li>
                    <li>georgiana.gherasim@destine-broker.ro</li>
                    <br />
                    <li><h4>Adresa</h4></li>
                    <li>Mun.Bacau, jud.Bacau</li>
                </ul>
                <br />
                <a href="https://www.facebook.com/georgiana.gherasim.sorina" target="_blank" rel="noreferrer noopener">
                <RiFacebookCircleLine size='3em' color='cornflowerblue' />
                </a>
            </div>
        </section>
    )
}