import { Link } from "react-router-dom";
import "./NavBar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useShoppingCart } from "../../context/ShoppingCartContext";
const NavBar = () => {
  const { setShowCart ,numProductsInCart } = useShoppingCart();
  return (
    <div className="container m-auto  mb-4 px-20 shadow-lg flex justify-between items-center">
      <ul className="list-none flex py-5 ">
        <li className="pe-10 text-lg font-semibold">
          <Link
            to="/"
            className="hover:text-3xl transition-all duration-300 hover:text-blue-600"
          >
            Home
          </Link>
        </li>
        <li className="pe-10 text-lg font-semibold">
          <Link
            to="/store"
            className="hover:text-3xl transition-all duration-300 hover:text-blue-600"
          >
            Store
          </Link>
        </li>
        <li className="pe-10 text-lg font-semibold">
          <Link
            to="/about"
            className="hover:text-3xl transition-all duration-300 hover:text-blue-600"
          >
            About
          </Link>
        </li>
      </ul>
      {/* cart */}
      <div className="relative">
          <AiOutlineShoppingCart className="cursor-pointer text-4xl hover:text-blue-600 transition-all duration-300 hover:text-6xl" onClick={()=>setShowCart(true)} />
        {/* number of products in cart  */}
        <div
          className="bg-red-500 flex justify-center items-center rounded-full text-white absolute cursor-pointer"
          style={{
            width: "1.5rem",
            height: "1.5rem",
            right: "0",
            bottom: "0",
            transform: "translate(25% ,25%)",
          }}
        >
          {numProductsInCart()}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
