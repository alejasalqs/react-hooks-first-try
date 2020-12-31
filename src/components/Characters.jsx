import React, { useEffect, useState, useReducer, useMemo, useRef, useCallback } from 'react'
import { useCharacters } from '../hooks/useCharacters';
import { CharacterCard } from './CharacterCard';
import { Search } from './Search';
import './styles/characters.css';

const initialState = {
    favorites: []
}

const API = "https://rickandmortyapi.com/api/character/";

// Esta es la implementación mínima de un reducer en redux
const favoritesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
           return {
               ...state,
               favorites: [...state.favorites, action.payload]
           }
    
        default:
            return state;
    }
}

export const Characters = () => {

    const [search, setSearch] = useState('');

    const [favorites, dispatch] = useReducer(favoritesReducer, initialState);

    const searchInput = useRef(null);

    const handleClick = (favorite) => {
        dispatch({type:'ADD_TO_FAVORITE', payload: favorite})
        characters.pop(favorite.id);
    }

    const characters = useCharacters(API);

    //const handleSearch = () => {
    //    setSearch(searchInput.current.value);
    //}

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value)
    }, []);

    // const filteredUsers = characters.filter(user => user.name.toLowerCase().includes(search.toLocaleLowerCase()));
    const filteredUsers = useMemo(() => 
        characters.filter(user => {
            return user.name.toLowerCase().includes(search.toLocaleLowerCase())
        })
    , [characters, search]);


    console.log(characters)

    return (
        <>
            <Search searchInput={searchInput} search={search} handleSearch={handleSearch}/>
            <div className="characters__container">
                
                {favorites.favorites.map(favorite => (
                    <div>
                        <CharacterCard key={favorite.id * 1000} {...favorite}/>
                        <button type="button" onClick={() => handleClick(favorite)}>Remove from Favorites</button>
                    </div>
                ))}
                <br />
                {filteredUsers.map(character => (
                    <div>
                        <CharacterCard key={character.id} {...character}/>
                        <button type="button" onClick={() => handleClick(character)}>Add to Favorites</button>
                    </div>
                ))} 
            </div>
        </>
    )
}
