import React from "react";
import  ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react"; 
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
 // console.log(loggedInUser)
 const cartItems = useSelector((store) => store.cart.items)
 //console.log(cartItems)


  // useEffect(()=>{
  //   console.log("useEffect Called");
  // },[btnName]);

    return (
      <div className="flex justify-between bg-yellow-100 shadow-lg sm:bg-pink-100 " >
        <div className="logo-container">
        <img className="w-24" src={LOGO_URL}></img>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              Online Status : {onlineStatus ? "🟢" : "🔴" }
            </li>
            <li className="px-4">
              <Link to="/">
                Home
              </Link>
            </li>
            <li className="px-4">
              <Link to="/about">
                About us
              </Link>
            </li>
            <li className="px-4">
              <Link to="/contact">
                Contact us
              </Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">
                Grocery
              </Link>
            </li>
            <li className="px-4 font-bold text-xl">
            <Link to="/cart">
            Cart ({cartItems.length} items)
              </Link>
              </li>
            <button className="login" onClick={()=> {
              btnName == "Login"
              ? setBtnName("Logout")
              : setBtnName("Login");
            }}
            >
            {btnName}</button>
            <li className=" px-4 font-bold"> {loggedInUser}</li>
          </ul>
        </div>
        
      </div>
    )
  }

  export default Header;