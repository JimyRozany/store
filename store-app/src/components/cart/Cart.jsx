import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import CartItem from "../cartItem/CartItem";
import products from "../../data/Products";
import formatCurrncy from "../formatCurrency/FormatCurrency";
const Cart = () => {
  const { setShowCart, cartItems } = useShoppingCart();
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)]">
      <div className="bg-white w-[350px] h-full absolute right-0">
        <h3 className="text-center py-2 bg-purple-600 text-white">
          <span>Cart</span>
          <RxCross1
            className="inline absolute right-1 top-1 text-xl cursor-pointer"
            onClick={() => setShowCart(false)}
          />
        </h3>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="text-2xl p-2">
          {cartItems.length !== 0
            ? (
                <div className="font-simebold absolute right-1">
                    Total Price : <span className="text-[20px] ">
                        {
                            formatCurrncy(
                                cartItems.reduce((totalPrice, cartItem) => {
                                  const item = products.find(
                                    (product) => product.id === cartItem.id
                                  );
                                  return totalPrice + item.price * cartItem.quantity;
                                }, 0)
                              )
                        }
                    </span>
                </div>
            )
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Cart;
