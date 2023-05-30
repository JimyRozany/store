import { Card } from "../components/index";
import Products from "../data/Products";

const Store = () => {
  return (
    <div className="container m-auto px-10">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

        {Products.map((product) => {
          return (
            <Card
              key={product.id}
              price={product.price}
              name={product.name}
              img_url={product.image_url}
            />
          );
        })}
        {Products.map((product) => {
          return (
            <Card
              key={product.id}
              price={product.price}
              name={product.name}
              img_url={product.image_url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Store;
