import React from  'react';
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
