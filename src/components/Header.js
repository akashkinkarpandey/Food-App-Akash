import { useContext, useState } from "react";
import logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import {useSelector} from "react-redux";
// const loggedInUser=()=>{
//   return false;
// };
import { createContext } from "react";
// import store from "../utils/store";
import UserContext from "../utils/UserContext";
const Title = () => (
    <a href="/">
      <img
        className="h-28 pl-2 sm:w-full"
        data-testid="logo"
        alt="logo"
        // src="https://static.vecteezy.com/system/resources/previews/005/355/079/original/restaurant-logo-food-logo-vector.jpg"
        src={logo}
      />
    </a>
);
const Header = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const isOnline=useOnline();
  const  {user}=useContext(UserContext);
  const cartItems=useSelector(store=>store.cart.items);
  console.log(cartItems);
  return(
  <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
    {/* {Title()} */}
    <Title />
    <div className="nav-items">
      <ul className="flex py-10 ">
      <li className="px-2">
        <Link to="/"> 
          Home
        </Link>
        </li>
        {/* <a href="http://localhost:1234/about"> //this is right also */}
        <li className="px-2">
        <Link to="/about"> 
          About
        </Link>
        </li>
        <li className="px-2">
        <Link to="/instamart"> 
          Instamart
        </Link>
        </li>
        <li className="px-2">
        <Link to="/contact"> 
        Contact
        </Link>
        </li>
        <li className="px-2">
        <Link to="/cart" data-testid="cart"> 
          Cart-{cartItems.length}
        </Link>
        </li>
      </ul>
    </div>
    <span className="p-10 font-bold text-red-900">
      {user.name}
    </span>
    <h1 className="py-10"  data-testid="online-status">{isOnline? '🟢':'🔴'}</h1>
    {
      isLoggedIn? <button onClick={()=>setIsLoggedIn(false)}>Logout</button>:
      <button onClick={()=>setIsLoggedIn(true)}>Login</button>
    }
  </div>
);
}
export default Header;
