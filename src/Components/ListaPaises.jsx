import React, { useState } from "react";
import PropTypes from "prop-types";
import { Pais } from "./Pais";
import { useEffect } from "react";


export const ListaPaises = ({idioma}) => {
    
    
    const [paisesM, setPaisesM] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/lang/${idioma}`)
          .then((response) => {
            return response.json();
          })

          .then((response) => {
            const paises = response.map((pais) => ({
              name: pais.name.common,
              capital: pais.capital,
              population: pais.population,
              continent: pais.region,
              img: pais.flags.png,
            }));
            setPaisesM(paises);
          });
      }, [idioma]);
    
      

  return (
    <>
      <div>
        {paisesM.map(( {name, capital, population, continent, img}, index ) => (
          <Pais
          key={index}
            name={name}
            capital={capital}
            population={population}
            continent={continent}
            img={img}
          />
        ))}
      </div>
    
    </>
  );
};

ListaPaises.propTypes = {
  idioma: PropTypes.string.isRequired,
};
