import React from "react";
import './Memento.css';
import BackToTopButton from "../backToTopButton/BackToTopButton";

export function Memento() {

  const date = new Date();
  const defaultValue = date.toLocaleDateString('en-CA');


  return (
    <section className="table-memento">
      <h2>Adaugă documente care expiră:</h2>
      <form>
        <label htmlFor="document"></label>
        <select id="document">
          <option>RCA</option>
          <option>CASCO</option>
          <option>PAD</option>
          <option>ITP</option>
          <option>Rovinietă</option>
          <option>Permis auto</option>
          <option>Act de identitate</option>
          <option>Pașaport</option>
        </select>

        <label htmlFor="data"></label>
        <input id="data" type="date" defaultValue={defaultValue} />

        <label htmlFor="phone"></label>
        <input id="phone" type="number" />

        <label htmlFor="email"></label>
        <input id="email" type="email" />

        <button>Adaugă</button>
      </form>
      <BackToTopButton />
    </section>
  )
}