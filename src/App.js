import React from 'react';
/*
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";*/


import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';





function App() {
  const[switchText,switchTextFun]=useState("Enable Dark Mode");
  const [alertt,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type 
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }

  const toggleMode=()=>{
    if(modee==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      switchTextFun("Enable Light Mode")
      showAlert("Dark Mode Enabled","success");
      document.title='AK Word App- Dark Mode';

    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      switchTextFun("Enable Dark Mode")
      showAlert("Light Mode Enabled","success");
      document.title='AK Word App- Light Mode';
    }
  }

  const [modee,setMode]=useState('light');
 
  return (
    <>
      {/*<Router>*/}
        <Navbar title="AK Word App" abouttext="About Us" mode={modee} toggleMode={toggleMode} switchTitle={switchText} />
        <Alert alert={alertt} />
        <div className="container">
       {/*} <About />*/}
        <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={modee} />
         {/*} <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={modee} />} />
  </Routes>*/}
        </div>
      {/*</Router>*/}
    </>
  );
}

export default App;