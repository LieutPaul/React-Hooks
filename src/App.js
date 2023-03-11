import React from 'react';
import FunctionContextComponent from './components/useContext/FunctionContextComponent';
import ThemeProvider from './components/useContext/ThemeContext';
import PrevValue from './components/useRef/PrevValue';
export default function App() {
  return (
    <>
      {/* useContext() */}
      <ThemeProvider>
        <FunctionContextComponent/>
      </ThemeProvider>
      <PrevValue/>
      {/*  */}
    </>
  );
}
