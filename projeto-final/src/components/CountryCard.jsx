import React from 'react';

const CountryCard = ({ country, isDark }) => {
  return (
    <div className={isDark ? "country-card country-card-dark" : "country-card"}>
      <img src={country.flag} alt={`${country.name} flag`} />
      <h2>{country.name}</h2>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>População:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Região:</strong> {country.region}</p>
    </div>
  );
};

export default CountryCard;
