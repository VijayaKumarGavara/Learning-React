import { useState, useEffect } from "react";
export default function useGetProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const res = await fetch("https://dummyjson.com/products/");
      const json = await res.json();
      setProducts(json?.products);
    } catch (err) {
      console.log(err);
    }
  }
  return products;
}
