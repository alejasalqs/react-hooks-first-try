import React, { useEffect, useState } from "react";

export const useCharacters = (url) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // No se puede hacer async/await, para hacer esto lo mejor es poner el codigo en una
    // función async aparten y llamarla acá
    fetch(url).then((response) =>
      response.json().then((data) => setCharacters(data.results))
    );
  }, [url]); // va a estar escuchando que URL cambie

  return characters;
};
