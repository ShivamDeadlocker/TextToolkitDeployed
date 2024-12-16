import './App.css';
import { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
 
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=> {
    setAlert({

      msg: message,
      type: type

    })
    setTimeout(()=>{setAlert(null)},1500)
  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#1E3A5F'
      showAlert("Dark mode enabled!!!","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled!!!","success")
    }

  }

  const setModeColor = (color, modeName) => {
    if(mode === 'light')
  {
    setMode('dark');
    document.body.style.backgroundColor = color;
    showAlert(`${modeName} mode enabled!!!`, 'success');
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode enabled!!!","success")
  }
  };
  return (
<>

<Navbar title="ShiamProTextToolkit" about="About Us" mode={mode} toggleMode={toggleMode} setModeColor={setModeColor}/>
<div className="container">
  <Alert alert={alert}/>
<TextForm heading="Enter your text below to analyze" mode={mode} showAlert={showAlert}/> 
{/* <About/> */}
</div>

{/* <Navbar/> */}

</>
 
  );
}

export default App;
