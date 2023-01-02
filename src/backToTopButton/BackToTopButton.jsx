import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './BacktoTopButton.css';
import {AiFillUpSquare } from "react-icons/ai";

export default function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        })
    },[])

    const scrollUp = () => {
        window.scrollTo ({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div>
        {backToTopButton && (
    <button 
    className='upButton'
    onClick={scrollUp}
    >
        <AiFillUpSquare />
    </button>
    )}
    </div>
  );
}
