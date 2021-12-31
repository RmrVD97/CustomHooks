import { useState } from "react";

const useCounter = (initialState=10) => {
    
    const [Counter, setCounter] = useState(initialState);

    const Incrementar=(valor=1) => {
        setCounter(Counter+valor);
    }

    const Decrementar=(valor=1) =>{
        setCounter(Counter-valor);
    } 

    const Reset=() => {
        setCounter(initialState);
    }

    return {
        Counter,
        Incrementar,
        Decrementar,
        Reset,
    };

};

export default useCounter;
