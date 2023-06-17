import products from "../../data/Products";
import formatCurrncy from "../formatCurrency/FormatCurrency";
import { BsTrash3 } from "react-icons/bs";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const CartItem = ({ id, quantity }) => {
  const product = products.find((item) => item.id === id);
  const { removeItemFromCart ,} = useShoppingCart();

  return (
    <div className="p-2 flex items-center">
      <div className="w-20 rounded-md overflow-hidden">
        <img src={product.image_url} alt="" />
      </div>
      <div className="ml-3 ">
        <div className="">
          {product.name}{" "}
          {quantity > 1 ? (
            <span className="text-gray-300 text-[12px]">x{quantity}</span>
          ) : (
            ""
          )}
        </div>
        <div className="text-gray-300">{formatCurrncy(product.price)}</div>
      </div>
      <div className="ml-12">
        
        {
            quantity > 1
                ? formatCurrncy(product.price * quantity)
                : formatCurrncy(product.price)
        }
       
      </div>
      <div className="absolute right-2">
        <BsTrash3
          className="hover:text-red-400 text-xl hover:text-2xl ease-in duration-200 cursor-pointer"
          onClick={() => removeItemFromCart(id)}
        />
      </div>
    </div>
  );
};

export default CartItem;
