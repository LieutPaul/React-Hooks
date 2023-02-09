import React from 'react';

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

export default function ThemeProvider({ children }){

    const [darkTheme,setDarkTheme] = React.useState(true);
  
    function toggleTheme(){
        darkTheme===true ? setDarkTheme(false) : setDarkTheme(true)
    }

    return (
        <ThemeUpdateContext.Provider value={toggleTheme}>
            <ThemeContext.Provider value={darkTheme}>
                {children}
            </ThemeContext.Provider>
        </ThemeUpdateContext.Provider>
    );
}

// Context provider : All Code that requires access to a value should be within the context provider
// value prop will be the state variable/function 
// Provider has a single prop called value which is made accessible to all functions within 