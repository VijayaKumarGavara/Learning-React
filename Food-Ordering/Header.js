import { useState } from "react";
import { Link } from "react-router";
import LOGO_URL from "./utils/constants";
const Header = () => {
  const [status, setStatus] = useState("login");
  return (
    <div className="flex justify-between items-center">
      <div className="w-48">
        <img src={LOGO_URL} alt="app-logo" className="object-cover" />
      </div>
      <div>
        <ul className="flex items-center text-2xl">
          <li className="px-10">
            <Link to="/">Home</Link>
          </li>
          <li className="px-10">
            <Link to="/about">About</Link>
          </li>
          <li className="px-10">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-10">Cart</li>
          <button
            className="px-10"
            type="button"
            onClick={() => {
              let s = status === "login" ? "logout" : "login";
              setStatus(s);
            }}
          >
            {status}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
