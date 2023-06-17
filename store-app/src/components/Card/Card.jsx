import { FormatCurrency } from "../index";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const Card = ({ product_id, price, name, img_url }) => {
  const {
    getItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart,
  } = useShoppingCart();
  const quantity = getItemsQuantity(product_id);
  // console.log(quantity)

  return (
    // <div className="group relative ">
    //   <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 p-3">
    //     <img
    //       src={img_url}
    //       alt="Front of men&#039;s Basic Tee in black."
    //       className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-md"
    //     />
    //   </div>

    //   <div className="mt-4 flex justify-between">
    //     <div>
    //       <h3 className="text-sm text-gray-700">
    //         {/* <a href="#" className=""> */}
    //           <span aria-hidden="true" className="absolute inset-0"></span>
    //           {name}
    //         {/* </a> */}
    //       </h3>
    //     </div>
    //     <p className="text-sm font-medium text-gray-900">
    //       {FormatCurrency(price)}{" "}
    //     </p>
    //   </div>
    //   <div className="mt-3 flex itmes-center justify-center">
    //     {quantity === 0 ? (
    //       <button onClick={()=> console.log('blabal')}> gfdgdfgdg</button>

    //     ) : (
    //       <div className="flex flex-col items-center justify-center">
    //         <div className="flex gap-5 items-center justify-center">
    //           <button
    //             // className="rounded-tr-lg rounded-bl-lg  bg-red-500 w-8 text-white font-bold text-xl flex items-center justify-center border-8"
    //             onClick={()=>decreaseCartQuantity(product_id)}
    //           >
    //             -
    //           </button>
    //           <div className="font-bold">{quantity} in cart</div>
    //           <button
    //             // className="rounded-tr-lg rounded-bl-lg bg-blue-500 w-8 text-white font-bold text-xl flex items-center justify-center"
    //             onClick={() => increaseCartQuantity(product_id)}
    //           >
    //             +
    //           </button>
    //         </div>
    //         <button
    //           // className="bg-red-500 rounded-full py-1 px-3 mt-2 text-white font-semibold"
    //           onClick={() => removeItemFromCart(product_id)}
    //         >
    //           Remove
    //         </button>
    //       </div>
    //     )}
    //   </div>
    // </div>
    //  -------------------- Old code for card 

    <div className=" w-25 h-min shadow-2xl p-4 m-2 rounded  border-2xl border-red-300">
      <div className="image  m-2 flex justify-center items-center" >
        <img src={img_url} alt="" width="75%" className="rounded-md"/>
      </div>

      <div className="product_info p-3 flex items-center justify-between">
        <div className="product_name text-xl font-semibold text-blue-600">
          <h3>{name}</h3>
        </div>
        <div className="product_price text-green-600 font-semibold">
          <p>{FormatCurrency(price)}</p>
        </div>
      </div>

      <div className="product_options py-3">
        {quantity === 0 ? (
          <div className="flex items-center justify-center">
            <button
              className="text-2xl bg-purple-400 p-3 rounded hover:bg-purple-700 shadow-md hover:shadow-blue-500/50 text-white"
              onClick={() => increaseCartQuantity(product_id)}
            >
              {" "}
              add to cart
            </button>
          </div>
        ) : (
          <div className="">
            <div className="flex items-center justify-center">
              <button
                className="px-2 mx-2 text-2xl text-white bg-red-300 hover:bg-red-400 rounded"
                onClick={() => decreaseCartQuantity(product_id)}
              >
                -
              </button>
              <span className="text-2xl"> <span className="text-blue-600">{quantity}</span> in cart </span>
              <button
                className="px-2 mx-2 text-2xl text-white bg-green-300 hover:bg-green-400 rounded"
                onClick={() => increaseCartQuantity(product_id)}>
                +
              </button>
            </div>
            <div className="py-1 flex items-center justify-center">
              <button 
                className="p-1 px-4 text-2xl text-white bg-red-300 hover:bg-red-400 rounded"
                onClick={() => removeItemFromCart(product_id)}>
                remove
              </button>
            </div>
          </div>
        )}
      </div>
    </div>


  );
};

export default Card;
