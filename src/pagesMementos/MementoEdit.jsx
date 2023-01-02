import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from '../pagesHeader/auth/Auth-context';
import '../pagesMementos/MementoEdit.css';


export function MementoEdit() {
    const url = 'http://localhost:3001/mementos/';
    let { id } = useParams();

    const { auth } = useContext(AuthContext);


    useEffect(() => {
        fetch(url + id, {
            headers: {
                Authorization: `Bearer ${auth.accessToken}`
            }
        })
            .then((response) => response.json())
            .then((resp) => {
                setDocument(resp.document);
                setData(resp.data);
                setPhone(resp.phone);
                setEmail(resp.email);
            }).catch((err) => {
                console.log(err.message);
            })
    }, [id]);

    const [document, setDocument] = useState('');
    const [data, setData] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();

        const body = {
            document: document,
            data: data,
            phone: phone,
            email: email,
            id: id,
        };

        fetch(url + id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth.accessToken}`
            },
            body: JSON.stringify(body)
        }).then(() => {
            alert('Editat cu success!')
            navigate('/mementos/')
        }).catch((err) => {
            console.log(err.message)
        })
    }



    return (
        <section className="edit-table">
            <h2 className="edit-title">Adaugă documente care expiră:</h2>
            <form onSubmit={handleSubmit}>

                <label htmlFor="document">Document</label>
                <select
                    name="document"
                    type="document"
                    value={document}
                    onChange={event => setDocument(event.target.value)}>
                    <option value="null" disabled>Selectați documentul</option>
                    <option value="RCA">RCA</option>
                    <option value="CASCO">CASCO</option>
                    <option value="ITP">ITP</option>
                    <option value="Rovinieta">Rovinietă</option>
                    <option value="PAD">PAD</option>
                    <option value="Buletin">Act de identitate</option>
                    <option value="Pasaport">Pașaport</option>
                    <option value="Permis">Permis auto</option>

                </select>

                <label htmlFor="data">Data</label>
                <input
                    name="data"
                    type="date"
                    required="required"
                    value={data}
                    onChange={event => setData(event.target.value)}
                />

                <label htmlFor="phone">Telefon</label>
                <input
                    name="phone"
                    type="number"
                    required="required"
                    placeholder="Numar de telefon"
                    value={phone}
                    onChange={event => setPhone(event.target.value)}
                />

                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    type="email"
                    required="required"
                    placeholder="Adresa de email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <button type="submit">Editează</button>
                <Link to="/mementos">
                    <button>Înapoi</button></Link>
            </form>
        </section>

    )
}