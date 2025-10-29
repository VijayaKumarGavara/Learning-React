import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

export default function RestaurantInfo() {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9345413&lng=77.6268856&restaurantId=807690",
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            Accept: "application/json, text/plain, */*",
            "Accept-Language": "en-US,en;q=0.9",
            Referer: "https://www.swiggy.com/",
          },
        }
        // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.93629226592993&lng=77.62197833042262&restaurantId=1013620"
      );
      console.log(res);
      const json = await res.json();

      setResInfo(json);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h3>Restaurant Info</h3>
    </>
  );
}
