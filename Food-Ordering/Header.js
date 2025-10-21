import {useState} from "react";
import { useState } from "react";
import LOGO_URL from "./utils/constants";
const Header = () => {
  const [status, setStatus]=useState('login');
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="app-logo"
        />
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button 
            className="login-btn"
            type="button"
            onClick={()=>{
              let s=status==='login'?'logout':'login';
              setStatus(s);
            }}
          >{status}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;