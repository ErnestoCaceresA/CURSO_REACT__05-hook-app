import React from 'react';
import useCounter from '../../hooks/useCounter';
import "./counter.css";

const CounterAppWithCustomHook = () => {

    // ------------------------------------------------------------------------------------------------------------
    // USE STATE: Es un hook que permite que una variable tenga cambios constantes, y esa variable tiene su propia funcion setState() para cambiar el valor de ella
    // ------------------------------------------------------------------------------------------------------------

    // COUNTER CON CURTOM HOOK (FUNCION QUE TIENE TODA LA LOGICA DE EL CONTADOR PARA PODER REUTILIZARLO)
    const { state:counter, increment, decrement, reset }  =  useCounter(100) //desestructurar el objeto que retorna el hook

    return (
        <>
            <h1>Counter with hook: { counter }</h1>
            <h1/>

            <button onClick={ () => increment(2)} className="btn"> +1 </button>
            <button onClick={ () => decrement(2)} className="btn"> -1 </button>
            <button onClick={ reset }  className="btn" > reset </button>
        </>
    );
}

export default CounterAppWithCustomHook;
