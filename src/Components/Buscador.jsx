import React from "react";
import { useState } from "react";

export const Buscador = ({onFindIdioma}) => {


    const [inputValue, setInputValue] = useState("")

    const changeInput = (event) => {
        setInputValue(event.target.value);
    }

    const buscarPaises = (event) =>{
        event.preventDefault()
        onFindIdioma(inputValue);
        setInputValue("");
    }

    

  return (
    <>
    <form  onSubmit={buscarPaises}
    >
    <input type="text" name="" id="" placeholder="Buscar..." value={inputValue} onChange={changeInput}/>
      <button >Buscar</button>
    </form>
      
    </>
  );
};
