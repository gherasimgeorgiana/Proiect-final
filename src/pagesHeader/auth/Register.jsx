import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './Auth-context';


export default function Register() {
    const loginUrl = 'http://localhost:3001/register';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    const { auth, setAuth } = useContext(AuthContext);

    const navigate = useNavigate();

    function nameChangeHandler(event) {
        setName(event.target.value);
    }

    function lastNameChangeHandler(event) {
        setLastName(event.target.value);
    }

    function emailChangeHandler(event) {
        setEmail(event.target.value);
    }
    function passwordChangeHandler(event) {
        setPassword(event.target.value);
    }

    function onSubmit(event) {
        event.preventDefault();
        setEmailError('');
        setPasswordError('');
        setNameError('');
        setLastNameError('');

        const emailValid = validateEmail(email);
        const passwordValid = validatePassword(password);
        const nameValid = validateName(name);
        const lastNameValid = validateLastName(lastName);

        if (!emailValid || !passwordValid || !nameValid || !lastNameValid){
            return;
        }

        const body = {
            name: name,
            lastName: lastName,
            email: email,
            password: password
        }
        fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then((response) => response.json())
            .then((response) => {
                setAuth(response);
                navigate('/mementos');
            })
    }

    function validateLastName(lastName) {
        const cap = /^[A-Z]{1}.+$/;

        const lastNameValid = cap.test(lastName);

        if (!lastNameValid) {
            setNameError('Introduceți prenumele dvs!')
        }
        return lastNameValid;
    }

    function validateName(name) {
        const cap = /^[A-Z]{1}.+$/;

        const nameValid = cap.test(name);

        if (!nameValid) {
            setNameError('Introduceți numele dvs!')
        }
        return nameValid;
    }

    function validateEmail(email) {
        const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

        const emailValid = emailRegex.test(email);


        if (!emailValid) {
            setEmailError('Introdu o adresa de email valida!');
        }
        return emailValid;
    }

    function validatePassword(password) {
        //minim 6 caractere
        //1 litera mare
        //1 numar


        if (!(password.length >= 6)) {
            setPasswordError('Parola trebuie sa contina minim 6 caractere');
            return false;
        }

        let hasUppercase = false;
        let hasNumber = false;

        for (let letter of password) {
            if (
                !(Number.isNaN(Number(letter)))
                && letter === letter.toUpperCase()
            ) {
                hasUppercase = true;
            }

            if (typeof Number(letter) === 'number') {
                hasNumber = true;
            }
        }

        if (!hasUppercase) {
            setPasswordError('Parola trebuie sa contina minim o majuscula');
        }

        if (!hasNumber) {
            setPasswordError('Parola trebuie sa contina minim un numar');
        }

        if (hasUppercase && hasNumber) {
            return true;
        }

        return false;
    }

    return (

        <section className='auth-form-container'>

            <form className='register-form' onSubmit={onSubmit} noValidate>
                <h2>Înregistează-te</h2>
                <label></label>
                <input
                    value={name}
                    id='name'
                    placeholder=' Numele'
                    onChange={nameChangeHandler} />
                <p className='danger'>{nameError}</p>

                <label></label>
                <input
                    value={lastName}
                    id='lastName'
                    placeholder=' Prenumele'
                    onChange={lastNameChangeHandler} />
                <p className='danger'>{lastNameError}</p>

                <label htmlFor='email'></label>
                <input
                    id='email'
                    type='email'
                    required="required"
                    placeholder=" Adresa de email"
                    value={email}
                    onChange={emailChangeHandler} />
                <p className='danger'>{emailError}</p>



                <label htmlFor='password'></label>
                <input
                    id='password'
                    type='password'
                    required="required"
                    placeholder=" Parola"
                    value={password}
                    onChange={passwordChangeHandler} />
                <p className='danger'>{passwordError}</p>

                <button className='btn-register' type='submit' >
                    Cont nou
                </button>
                <p className='register-here'>Ai cont? Te poți loga <Link to='/login'><strong>aici!</strong></Link></p>
            </form>

        </section>
    )
}
