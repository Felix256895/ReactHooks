import React from 'react'
import './index.css';

export default function Header(props) {
  return (
    <header className='header'>
      <h2 className='header__title'>{props.text}</h2>
    </header>
  );
}
