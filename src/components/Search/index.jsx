import React, { useState } from 'react';
import './index.css';

export default function Search({ search }) {
  const [searchValue, setSearchValue] = useState('');
  const handleChange = e => {
    setSearchValue(e.target.value);
  };
  const restInputFeild = () => {
    setSearchValue('');
  };
  const handleClick = e => {
    if (searchValue === '') {
      return false;
    }
    search(searchValue || 'man');
    restInputFeild();
  };
  const handleKeyPress = e => {
    e.keyCode === 13 && handleClick();
  };
  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        value={searchValue}
        onChange={handleChange}
        onKeyUp={handleKeyPress}
      />
      <button className="search__btn" onClick={handleClick}>
        Search
      </button>
    </div>
  );
}
