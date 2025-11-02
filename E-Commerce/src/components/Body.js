import { Link } from "react-router";
import useGetProducts from "../../utils/useGetProducts";
import ProductCard, { WithPromotedLabel } from "./ProductCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const products = useGetProducts();
  const ProductPromoted = WithPromotedLabel(ProductCard);
  if (!products) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-10 mx-20 my-10">
        {products.map((item) => {
          if (item.rating > 4) {
            return (
              <Link to={`/products/${item.id}`} key={item.id} state={{item}}>
                <ProductPromoted  product={item} />
              </Link>
            );
          } else {
            return (
              <Link to={`/products/${item.id}`} key={item.id} state={{item}}>
                <ProductCard product={item} />
              </Link>
            );
          }
        })}
      </div>
    </>
  );
};

export default Body;
