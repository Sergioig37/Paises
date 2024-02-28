import React, { useState } from "react";
import PropTypes from "prop-types";
import { Pais } from "./Pais";
import { useEffect } from "react";

export const ListaPaises = ({ idioma }) => {
  const [paisesM, setPaisesM] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/lang/${idioma}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.length !== 0) {
          const paises = response.map((pais) => ({
            name: pais.name.common,
            capital: pais.capital,
            population: pais.population,
            continent: pais.region,
            img: pais.flags.png,
          }));
          setPaisesM(paises);
        }
      });
  }, []);

  return (
    <>
      <div>
        {paisesM.length === 0
          ? "No hay paises"
          : paisesM.map(
              ({ name, capital, population, continent, img }, index) => (
                <Pais
                  key={index}
                  name={name}
                  capital={capital}
                  population={population}
                  continent={continent}
                  img={img}
                />
              )
            )}
      </div>
    </>
  );
};

ListaPaises.propTypes = {
  idioma: PropTypes.string.isRequired,
};
