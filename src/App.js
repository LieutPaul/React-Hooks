import React from  'react';
// import ClassContextComponent from './ClassContextComponent';
import FunctionContextComponent from './FunctionContextComponent';
import ThemeProvider from './ThemeContext';
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <FunctionContextComponent/>
    </ThemeProvider>
  );
}
// Context provider : All Code that requires access to a value should be within the context provider
// Provider has a single prop called value which is made accessible to all functions within 
