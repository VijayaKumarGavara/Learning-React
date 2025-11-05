import React, { useContext } from "react";
import { Link } from "react-router";
import UserContext from "../../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const cart=useSelector((store)=>store.cart.items);
  console.log(cart);
  const {userName}=useContext(UserContext);
  return (
    // div.
    <>
      <div className="bg-blue-500">
        <nav className="navbar">
          <ul className="flex flex-row justify-around items-center h-15 ">
            <li className="m-4 px-2 py-1  text-lg font-medium text-cyan-50 hover:bg-blue-700 hover:border-transparent-2 hover:rounded-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="m-4 px-2 py-1  text-lg font-medium text-cyan-50 hover:bg-blue-700 hover:border-transparent-2 hover:rounded-lg">
              <Link to="/cart">Cart - {cart.length}</Link>
            </li>
            <li className="m-4 px-2 py-1  text-lg font-medium text-cyan-50 hover:bg-blue-700 hover:border-transparent-2 hover:rounded-lg">
              <Link to="/profile">{userName}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
