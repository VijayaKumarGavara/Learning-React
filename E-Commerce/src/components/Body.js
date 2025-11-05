import { Link } from "react-router";
import useGetProducts from "../../utils/useGetProducts";
import ProductCard, { WithPromotedLabel } from "./ProductCard";
import Shimmer from "./Shimmer";
import { useContext } from "react";
import UserContext from "../../utils/userContext";
const Body = () => {
  const products = useGetProducts();
  const ProductPromoted = WithPromotedLabel(ProductCard);

  const { userName, setName } = useContext(UserContext);
  if (!products) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="mx-20 my-10">
        <label htmlFor="">User Name: </label>
        <input
          type="text"
          className="border border-black rounded-lg "
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 mx-20 my-10">
        {products.map((item) => {
          if (item.rating > 4) {
            return (
              // <Link to={`/products/${item.id}`} key={item.id} state={{item}}>
              //   <ProductPromoted  product={item} />
              // </Link>
              <li key={item.id} state={{ item }} className="list-none">
                <ProductPromoted product={item} />
              </li>
            );
          } else {
            return (
              // <Link to={`/products/${item.id}`} key={item.id} state={{ item }}>
              //   <ProductCard product={item} />
              // </Link>
              <li key={item.id} state={{ item }} className="list-none">
                <ProductCard product={item} />
              </li>
            );
          }
        })}
      </div>
    </>
  );
};

export default Body;
