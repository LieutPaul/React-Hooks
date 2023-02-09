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