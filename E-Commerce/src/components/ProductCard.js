import { useContext } from "react";
import { useSelector,useDispatch } from "react-redux";
import {addItem} from "../../utils/cartSlice.js"
import UserContext from "../../utils/userContext";

export default function ProductCard(props) {
  const cartItems=useSelector((store)=>store.cart.items);
  const dispatch=useDispatch();
  const { userName } = useContext(UserContext);
  const { product } = props;

  const handleAddToCart = (item) => {
    if(!cartItems.includes(item))
      dispatch(addItem(item));
  };
  return (
    <>
      <div className="w-60 h-80 border-2 rounded-lg bg-gray-50 hover:cursor-pointer hover:bg-gray-200">
        <button
          className="border rounded-lg mx-20 my-1 px-4 py-2"
          onClick={()=>handleAddToCart(product)}
        >
          Add+
        </button>
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
