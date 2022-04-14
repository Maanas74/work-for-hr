import './App.css';
import React from 'react';
import Header from './components/Header';
import DataLoad from './components/DataLoad';
import Footer from './components/Footer';

//  import { Container } from '@mui/material';

function App() {
  return (
    <>
        <div style={{backgroundColor: "rgb(34, 52, 63)"}}>
          <Header/>
          <DataLoad/>
          <Footer/>
        </div>
    </>
  );
}

export default App;
