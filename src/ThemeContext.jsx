import React from 'react';

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

export default function ThemeProvider({ children }){
    
    const [darkTheme,setDarkTheme] = React.useState(true);
  
    function toggleTheme(){
        setDarkTheme((prevDarkTheme)=>{
            return !(prevDarkTheme);
        })
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
// Provider has a single prop called value which is made accessible to all functions within 