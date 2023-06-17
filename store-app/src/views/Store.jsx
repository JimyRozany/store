import { Card } from "../components/index";
import Products from "../data/Products";
import Cart from "../components/cart/Cart";
import { useShoppingCart } from "../context/ShoppingCartContext";


const Store = () => {
 const {showCart ,setShowCart} = useShoppingCart();
  return (
    <>
    <div className="container m-auto px-10">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

        {Products.map((product) => {
          return (
            <Card
              key={product.id}
              product_id={product.id}
              price={product.price}
              name={product.name}
              img_url={product.image_url}
            />
          );
        })}
        {/* {Products.map((product) => {
          return (
            <Card
              key={product.id}
              price={product.price}
              name={product.name}
              img_url={product.image_url}
            />
          );
        })} */}
      </div>
    </div>
    {
      showCart && <Cart setShowCart={setShowCart}/>
    }
    
    </>
    
  );
};

export default Store;
