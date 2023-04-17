import * as React from 'react';
import './styles/header.css'

export interface IHeaderProps {
}

export function Header ({setAuth}: any) {

  const logOutHandler = () => {
    setAuth(false)
    localStorage.clear()
  }

  return (
    <header className='header'>
        <nav><h1>Esoft-Todo</h1></nav>
        <div className='header_options'>
            <a className='header_options' onClick={()=>logOutHandler()}>Выйти</a>
            <a className='header_options'>Source</a>
        </div>

    </header>
  );
}
