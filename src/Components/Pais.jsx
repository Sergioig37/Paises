import React from "react";

export const Pais = ({ name, capital, continent, population, img }) => {
  return (
    <>
      <div>
        <img src={img} alt="" />
        <h3>{name}</h3>
        <p>Capital: {capital}</p>
        <p>Continente: {continent}</p>
        <p>{population}</p>
      </div>
    </>
  );
};
