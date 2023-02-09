import React from  'react';

import './App.css';

export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme,setDarkTheme] = React.useState(true);
  
  function toggleTheme(){
    setDarkTheme((prevDarkTheme)=>{
      return !(prevDarkTheme);
    })
  }
  
  return (
    <div>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </ThemeContext.Provider>
    </div>
  );
}
