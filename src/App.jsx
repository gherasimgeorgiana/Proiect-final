import React from 'react';
import Header from './pagesHeader/Header';
import './App.css';
import Home from './pagesHeader/Home';
import Info from './pagesHeader/Info';
import Contact from './pagesHeader/Contact';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from './pagesNavbar/Navbar';
import Rca from './pagesNavbar/Rca';
import House from './pagesNavbar/House';
import Travel from './pagesNavbar/Travel';
import Casco from './pagesNavbar/Casco';
import {Login} from './pagesHeader/auth/Login';
import  {InsuranceList}  from './pagesNavbar/InsuranceList';
import {InsuranceDetails} from './pagesInsurance/InsuranceDetails';
import { MementoList } from './pagesMementos/MementoList';
import { MementoEdit } from './pagesMementos/MementoEdit';
import {MementoCreate} from './pagesMementos/MementoCreate';
import { AuthContextProvider } from './pagesHeader/auth/Auth-context';
import { CanNavigate } from './pagesHeader/auth/CanNavigate';
import { useState } from 'react';
import Footer from './pagesNavbar/Footer';
import Register from './pagesHeader/auth/Register';
import RegisterEdit from './pagesHeader/auth/RegisterEdit';




function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (

    <BrowserRouter>
      <AuthContextProvider>
        <div>
        <Header />
        <Navbar />
        
        <Routes className='App'>
       
          <Route exact path="login" element={ currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} />
          <Route path="/register" element={ <Register />} />
          <Route path="/registeredit/:id" element={<RegisterEdit />} />
        
          <Route path="/" element={<Home />} />
          <Route path="/mementos/" element={
            <CanNavigate>
              <MementoList />
            </CanNavigate>
          } />
          <Route path="/create/" element={<MementoCreate />} />
          <Route path="/edit/:id" element={<MementoEdit />} />

          <Route path="/infoDaune" element={<Info />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/rca" element={<Rca />} />
          <Route path="/casco" element={<Casco />} />
          <Route path="/house" element={<House />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/complet" element={<InsuranceList />} />
          <Route path="/complet/insurance-details/:insuranceId" element={<InsuranceDetails />} />
          
        </Routes>
        <Footer />
        </div>
      </AuthContextProvider>
    </BrowserRouter>

  );
}

export default App;
 
