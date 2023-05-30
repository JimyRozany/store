import { Link } from "react-router-dom";
import "./NavBar.css";
import {AiOutlineShoppingCart} from 'react-icons/ai';
const NavBar = () => {
  return (
    <div className="container m-auto  mb-4 px-20 shadow-lg flex justify-between items-center">
      <ul className="list-none flex py-5 ">
        <li className="pe-10 text-lg font-semibold">
          <Link to="/" className="hover:text-3xl transition-all duration-300 hover:text-blue-600">Home</Link>
        </li>
        <li className="pe-10 text-lg font-semibold">
          <Link to="/store" className="hover:text-3xl transition-all duration-300 hover:text-blue-600">Store</Link>
        </li>
        <li className="pe-10 text-lg font-semibold">
          <Link to="/about" className="hover:text-3xl transition-all duration-300 hover:text-blue-600">About</Link>
        </li>
      </ul>
      {/* cart */}
      <div className="relative">
        <a href="#" >
        
          <AiOutlineShoppingCart className="text-4xl hover:text-blue-600 transition-all duration-300 hover:text-6xl"/>
        </a>
        {/* number of products in cart  */}
        <div
          className="bg-red-500 flex justify-center items-center rounded-full text-white absolute"
          style={{ width: "1.5rem", height: "1.5rem",right:'0', bottom:"0",transform:'translate(25% ,25%)',  }}
        >
          3
        </div>
      </div>
    </div>
  );
};

export default NavBar;
