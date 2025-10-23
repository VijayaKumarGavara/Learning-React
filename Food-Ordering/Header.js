import {useState} from "react";
import { Link } from "react-router";
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
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
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