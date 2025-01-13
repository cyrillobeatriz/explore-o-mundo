import React from 'react';
import CountryCard from './Countrycard';

const CountryList = ({ countries, isDark }) => {
  return (
    <div className="country-list">
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} isDark={isDark} />
      ))}
    </div>
  );
};

export default CountryList;
