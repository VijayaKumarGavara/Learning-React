import { useContext } from "react";
import UserContext from "../../utils/userContext";

export default function ProductCard(props) {
  const {userName}=useContext(UserContext);
  const { product } = props;
  return (
    <>
      <div className="w-60 h-72 border-2 rounded-lg bg-gray-50 hover:cursor-pointer hover:bg-gray-200">
        <div className="w-52 h-32 border-transparent mx-3 my-1">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>
        <h4>{product.title}</h4>
        <h4>{product.category}</h4>
        <h5>{product.brand}</h5>
        <p>{product.tags.join(",")}</p>
        <p>{userName}</p>
      </div>
    </>
  );
}

export function WithPromotedLabel(ProductCard) {
  return (props) => {
    return (
      <>
        {" "}
        <div>
          <label className="absolute px-5">Best</label>
          <ProductCard product={props.product} />
        </div>
      </>
    );
  };
}
