//import logo from './logo.svg';
import './App.css';
import TextForm from './components/textutils/TextForm';
 import TextNav from './components/textutils/Textnav';
// import About from './components/textutils/About';
import React, { useState } from 'react';

function App() {
  const [mode,setMode] = useState('light');
  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }

  }

  return (
    <>
     <TextNav title="TextUtils" mode={mode}  toggleMode ={toggleMode} /> 
   
 {
<div className="container">
<TextForm heading ="Enter the text to analyze below"  /> 
</div>} 
{/* <About /> */}


    </>
  );
}

export default App;
