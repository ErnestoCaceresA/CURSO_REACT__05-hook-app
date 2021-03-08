import React, { useState } from 'react';

const useCounter = (initialState = 10) => {
    
    const [state, setState] = useState(initialState)

    const increment = ( factor = 1 ) => {
        setState( state + factor );
    }

    const decrement = ( factor = 1 ) => {
        setState( state - factor );
    }

    const reset = () => {
        setState(initialState); //NO SE PONE (state = initialState) porque el setState por defecto lo que este dentro de las llaves será el nuevo valor de la variable
    }

    return {
        state,
        increment,
        decrement,
        reset
    };

}

export default useCounter;
