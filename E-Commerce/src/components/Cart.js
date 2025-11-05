import { useDispatch, useSelector } from "react-redux";
import ProductCard, { WithPromotedLabel } from "./ProductCard";
import { clearCart } from "../../utils/cartSlice";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
    const dispatch=useDispatch();
  function handleClear(){
    dispatch(clearCart());
  }
  console.log(cartItems);
  if (cartItems.length==0)
    return (
      <>
        <h1>Your Cart is Empty, Please add some items</h1>
      </>
    );
  return (
    <>
      <div className="w-full flex flex-row justify-center items-center gap-x-10">
        <h1 className="font-bold text-2xl my-5">Cart</h1>
        <button className="border border-blue-500 rounded-lg ml-20 p-2 h-10" onClick={handleClear}>Clear Cart</button>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 mx-20 my-10">
        {cartItems.map((item) => {
          return (
            <li key={item.id} state={{ item }} className="list-none">
              <ProductCard product={item} />
            </li>
          );
        })}
      </div>
    </>
  );
}
