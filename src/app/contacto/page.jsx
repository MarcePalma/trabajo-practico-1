"use client"

import { useRef } from "react";
import { useState } from "react";

export default function Page(){
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
  
    const [successMessage, setSuccessMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const message = messageRef.current.value;
      alert('¡Formulario enviado con éxito!');
    };
    
    return (
        <main>
            <h2>Esta es la pagina para contactarnos!</h2>

            <a href="https://github.com/MarcePalma" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ff4500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
            </a>
            <section>
                <form onSubmit={handleSubmit}>
                    <p>Información de contacto</p>
                    <label htmlFor="name">Nombre:</label>
                    <input className="border" type="text" id="name" ref={nameRef} />
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input className="border" type="email" id="email" ref={emailRef} />
                    <label htmlFor="message">Mensaje:</label>
                    <textarea className="border" id="message" rows="4" ref={messageRef}></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </section>
         
        </main>
    )
    
}