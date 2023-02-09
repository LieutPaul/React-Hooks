import React, {useContext} from 'react'
import { ThemeContext } from './App'

export default function FunctionContextComponent(){
    
    const darkTheme = useContext(ThemeContext); // darkTheme is now obtained from App
    
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
        <div style={theme}>
            Function Theme
        </div>
    );
    
}