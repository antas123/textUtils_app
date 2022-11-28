
import { useState } from 'react';

import './App.css';

import Navbar from './components/Navbar';
import  TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {
  const [mode , setMode] = useState('light');
  
  const togglemod=()=>{
    if(mode === 'dark')
    {
      setMode('light')
      document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='#182747';
    }
  }
  return (
   <>
   
  <Navbar title="TextUtils" mode={mode} togglemod={togglemod}/>
  <Alert alert="WELCOME to TextUtils!!!"/>

  <div className="container my-4" >
  
   <TextForm heading="enter the text to analyze" mode={mode} /> 
         
  </div>
 
   </>
   
  );
}

export default App;
