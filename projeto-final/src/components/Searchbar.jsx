import React from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const SearchBar = ({ onSearch, onFilter, setIsDark, isDark }) => {
  // const submitDarkThemeButton = (event) => {
  //   event.preventDefault();
  //   setIsDark(true);
  // }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Pesquise por um país..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="">Filtrar por Região</option>
        <option value="Africa">África</option>
        <option value="Americas">Américas</option>
        <option value="Asia">Ásia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceânia</option>
      </select>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? < MdLightMode /> : < MdDarkMode />}
      </button>
    </div>
  );
};

export default SearchBar;
