import React, { useState } from 'react'
import { Titulo } from './Components/Titulo'
import { Buscador } from './Components/Buscador';
import { ListaPaises } from './Components/ListaPaises';


export const App = () => {


    const [idioma, setIdioma] = useState("spanish");
   
    

    const findIdioma = (idioma) => {
        console.log(idioma)
        setIdioma(idioma);
    }

  return (
    <>
        <Titulo/>
        <Buscador onFindIdioma={findIdioma}/>
        <ListaPaises idioma={idioma} key={idioma}/>
    </>
  )
}
