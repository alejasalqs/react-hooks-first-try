import { useState } from "react";
import "./App.css";
import { Characters } from "./components/Characters";
import { Header } from "./components/Header";

function App() {
  // El primero es una variable con la información del estado
  // El segundo es la función para editar el estado
  // Entre los parentesis de useState(_aqui_) se pone el estado inicial
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? "darkMode" : "lightMode"}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Characters />
    </div>
  );
}

export default App;
