import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from './Auth-context';

export default function RegisterEdit() {
    const url = 'http://localhost:3001/users/';
    let { id } = useParams();

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { auth } = useContext(AuthContext);

    useEffect(() => {
        fetch(url + id, {
            headers: {
                Authorization: `Bearer ${auth.accessToken}`
            }
        })
            .then((response) => response.json())
            .then((resp) => {
                setName(resp.name);
                setLastName(resp.lastName);
                setEmail(resp.email);
                setPassword(resp.password);
            }).catch((err) => {
                console.log(err.message);
            })
    }, [id]);


    const handleSubmit = (event) => {
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
            password: password,
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

    <form className='register-form' onSubmit={handleSubmit} noValidate>
        <h2>Editeaza profil</h2>
        <label></label>
        <input
            value={name}
            id='name'
            placeholder=' Numele'
            onChange={event => setName(event.target.value)} />
        <p className='danger'>{nameError}</p>

        <label></label>
        <input
            value={lastName}
            id='lastName'
            placeholder=' Prenumele'
            onChange={event => setLastName(event.target.value)} />
        <p className='danger'>{lastNameError}</p>

        <label htmlFor='email'></label>
        <input
            id='email'
            type='email'
            required="required"
            placeholder=" Adresa de email"
            value={email}
            onChange={event => setEmail(event.target.value)} />
        <p className='danger'>{emailError}</p>



        <label htmlFor='password'></label>
        <input
            id='password'
            type='password'
            required="required"
            placeholder=" Parola"
            value={password}
            onChange={event => setPassword(event.target.value)} />
        <p className='danger'>{passwordError}</p>

        <button className='btn-register' onClick={handleSubmit} >
            Editeaza cont
        </button>                
        <Link to="/login">
            <button>Înapoi</button></Link>
    </form>

</section>
  )
}
