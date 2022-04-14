import React from 'react';
import '../index.css';
// import { AppBar, Container, Toolbar, Grid, Typography } from '@mui/material';
import  Logo  from "../logos/highradius.svg"
import Logo1 from "../logos/logo.svg"
// // import { ReactComponent as Logo } from "../logos/highradius.svg";
// import useStyles from './Styles'

export default function Header() {


  return (
    <div className="header">
      <div className="ph1">
        <img src={Logo} alt="ABC Products Logo" />
      </div>
      <div className="ph2">
        <img src={Logo1} alt="Highradius Logo" />
      </div>  
      <div className="ph3">
        <p>Invoice List</p>
      </div>    
    </div>
  )
}
