import React, { useState } from 'react';
import "./counter.css";

const CounterApp = () => {

    // ------------------------------------------------------------------------------------------------------------
    // USE STATE: Es un hook que permite que una variable tenga cambios constantes, y esa variable tiene su propia funcion setState() para cambiar el valor de ella
    // ------------------------------------------------------------------------------------------------------------


    // setState con OBJETOS !!!!1
    const [state, setState] = useState({ 
        counter1: 10,
        counter2: 20,
        counter3: 30
    })
    //Desestructurar la variable porque ahora es un objeto
    const { counter1, counter2, counter3} = state;

    // usar operador Spread (...) para mantener el estado actual y solo afectar con el setState al objeto que queramos


    return (
        <>
            <h1>Counter1: { counter1 }</h1>
            <h1>Counter2: { counter2 }</h1>
            <h1>Counter3: { counter3 }</h1>
            <hr/>

            <button 
                className="btn btn-primary"
                onClick = { () => {
                    setState( {
                        ...state,
                        counter1: counter1 + 1
                    } );
                }}
            >
                +1
            </button>
        </>
    );
}

export default CounterApp;
