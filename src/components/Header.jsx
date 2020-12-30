import React, { useState } from 'react'
import './styles/header.css';


// Este header se encarga del estado de la aplicación entre DarkMode y LightMode
export const Header = ({darkMode, setDarkMode}) => {


    const handleClick = () => {
        // Cada vez que se de un click va a cambiar el estado
        setDarkMode(!darkMode);
    }

    return (
        <div className={`header ${darkMode ? 'darkMode' : 'lightMode'}`}>
            <h1>ReactHooks + Rick And Morty API 🚀</h1>
            <button className='header__btn' onClick={handleClick} type="button">{darkMode ? 'Light Mode 🌝' : 'Dark Mode 🌚'}</button>
        </div>
    )
}
