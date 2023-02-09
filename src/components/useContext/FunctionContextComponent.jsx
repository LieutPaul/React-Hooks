import React, {useContext} from 'react'
import { ThemeContext,ThemeUpdateContext } from './ThemeContext'

export default function FunctionContextComponent(){
    
    const darkTheme = useContext(ThemeContext); 
    const updateDarkTheme = useContext(ThemeUpdateContext); // updateDarkTheme() is now equal to toggleTheme()

    const theme = {
        width : "50%",
        textAlign : 'center',
        fontSize : '2rem',
        backgroundColor : darkTheme ? '#333' : '#CCC',
        color : darkTheme ? '#CCC' : '#333',
        padding : '2rem',
        margin : '2rem'
    }

    return (
        <>
            <button onClick={updateDarkTheme}>Toggle Theme</button>
            <div style={theme}>
                Function Theme
            </div>
        </>
    );    
    
}