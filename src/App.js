//import logo from './logo.svg';
import './App.css';
// import TextForm from './components/textutils/TextForm';
//  import TextNav from './components/textutils/Textnav';
// import About from './components/textutils/About';
// import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Contact from './components/Routers/Contact/Contact';
import Gallery from './components/Routers/Gallery/Gallery';
import Home from './components/Routers/Home/Home';
import Navbar from './components/Routers/Home/Navbar';
import About from './components/Routers/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/gallary" element={<Gallery />} />

      </Routes>
      </BrowserRouter>
    </div>
  );




//   const [mode,setMode] = useState('light');
//   const toggleMode =() =>{
//     if(mode === 'light'){
//       setMode('dark')
//       document.body.style.backgroundColor='grey'
//     }
//     else{
//       setMode('light')
//       document.body.style.backgroundColor='white'
//     }

//   }

//   return (
//     <>
//      <TextNav title="TextUtils" mode={mode}  toggleMode ={toggleMode} /> 
   
//  {
// <div className="container">
// <TextForm heading ="Enter the text to analyze below"  /> 
// </div>} 
// {/* <About /> */}


//     </>
//   );
}

export default App;
