import React from  'react';
import ClassContextComponent from './ClassContextComponent';
import FunctionContextComponent from './FunctionContextComponent';
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
        <ClassContextComponent/>
        <FunctionContextComponent/>
      </ThemeContext.Provider>
    </div>
  );
}
// Context provider : All Code that requires access to a value should be within the context provider
// Provider has a single prop called value which is made accessible to all functions within 
