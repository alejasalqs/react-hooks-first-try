import React from 'react'
import './styles/characters.css';

export const CharacterCard = ({name, image, addToFavorites}) => {
    
    return (
        <div className='characters__card'>
            <img src={image} alt={name}/>
            <h2>{name}</h2>
        </div>
    )
}
