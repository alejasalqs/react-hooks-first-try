import React, { useEffect, useState } from 'react'
import { CharacterCard } from './CharacterCard';
import './styles/characters.css';

export const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        // No se puede hacer async/await, para hacer esto lo mejor es poner el codigo en una
        // función async aparten y llamarla acá
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json()
                .then(data => setCharacters(data.results))
            )
    }, [])

    console.log(characters)

    return (
        <div className="characters__container">
            {characters.map(character => (<CharacterCard key={character.id} {...character}/>))} 
        </div>
    )
}
