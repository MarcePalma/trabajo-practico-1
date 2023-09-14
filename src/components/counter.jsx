"use client"


import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    const incrementarContador = () => {
        setCount(count + 1);
    };

    return (
        <section>
            <h2>Contador</h2>
            <p>{count}</p>
            <button onClick={incrementarContador}>Incrementar!</button>
        </section>
    )
}