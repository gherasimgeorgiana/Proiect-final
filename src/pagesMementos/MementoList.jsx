import React from 'react';
import "./MementoList.css";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../pagesHeader/auth/Auth-context';

export function MementoList() {

  const url = 'http://localhost:3001/mementos/';
  const [mementos, setMementos] = useState(null);
  const navigate = useNavigate();

  const { auth, logOut } = useContext(AuthContext);

  const editMemento = (id) => {
    navigate('/edit/' + id);
  }

  const deleteMemento = (id) => {
    if (window.confirm('Sigur vrei sa stergi?')) {
      fetch(url + id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${auth.accessToken}`
        }
      }).then((response) => {
        alert('Sters cu success!')
        window.location.reload();
      }).catch((err) => {
        console.log(err.message)
      });
    }
  }

  useEffect(() => {
    fetch(url, {
      headers: {
        'Authorization': `Bearer${auth.accessToken}`
      }
    })
      .then((response) => response.json())
      .then((mementosFromServer) => {
        setMementos(mementosFromServer);
      }).catch((err) => {
        console.log(err.message);
      })
  }, [])

  return (
    <section className='memento-list'>
      <nav className='memento-nav'>
        <p>Bună, {auth?.user?.name + '!'}</p>

        <button onClick={logOut}>Logout</button>
      </nav>
      
        <Link to="/create">
          <button className='btn-create'>Adaugă document (+)</button>
        </Link>
      
      <table className='table-list'>
        <thead>
          <tr>
            <th>Tip document</th>
            <th>Dată expirare</th>
            <th>Telefon</th>
            <th>Email</th>
            <th>Opțiuni</th>
          </tr>
        </thead>
        <tbody>
          {mementos &&
            mementos.map((memento) => (
              <tr key={memento.id}>
                <td>{memento.document}</td>
                <td>{memento.data}</td>
                <td>{memento.phone}</td>
                <td>{memento.email}</td>
                <td className='btn-edit-delete' >
                  <button className='btn-edit-list' onClick={() => { editMemento(memento.id) }}>Editează</button>
                  <button className='btn-delete-list' onClick={() => { deleteMemento(memento.id) }}>Șterge</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </section>
  )
}