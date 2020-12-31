import React from 'react'

export const Search = ({searchInput,search,handleSearch}) => {
    return (
        <div>
            <input 
            ref={searchInput} 
            className="characters__input" 
            type="text" placeholder="Search..." 
            value={search} 
            onChange={handleSearch}/>
        </div>
    )
}
