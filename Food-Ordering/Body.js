import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import SearchBar from "./SearchBar";
const Body = () => {
  const [list, setList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/swiggy");
        const data = await res.json();
        const restaurants =
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];

        setList(restaurants);
        setOriginalList(restaurants);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);
  const handleSearch = (query) => {
    if (!query.trim()) {
      setList(originalList);
      return;
    } else {
      const fl = originalList.filter((restaurant) => {
        const name = restaurant.info?.name?.toLowerCase() || "";
        const cuisines =
          restaurant.info?.cuisines?.join(", ").toLowerCase() || "";
        return (
          name.includes(query.toLowerCase()) ||
          cuisines.includes(query.toLowerCase())
        );
      });

      setList(fl);
      return;
    }
  };
  if (list.length === 0) {
    return (
      <>
        <Shimmer />
      </>
    );
  }
  return (
    <>
      <div className="filter">
        <SearchBar onSearch={handleSearch} />
        <button
          className="filter-btn"
          type="button"
          onClick={() => {
            let filteredList = (list===originalList)?originalList:list.filter(
              (res) => res.info.avgRating > 4.3
            );
            setList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          type="button"
          onClick={() => {
            setList(originalList);
          }}
        >
          Show All Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resName="Janata Food Court" cuisines="Fried Rice, Andhra, Indian" resRating="4.2 stars" delevieryTime="20 minutes"/>
                <RestaurantCard resName="SVG Grand" cuisines="Biryani, Andhra" resRating="4.6 stars" delevieryTime="35 minutes"/>
                 */}

        {/* <RestaurantCard restaurant={resObj} /> */}

        {/* <RestaurantCard restaurant={resList[0]}/>
        <RestaurantCard restaurant={resList[1]}/>
        <RestaurantCard restaurant={resList[2]}/>
        <RestaurantCard restaurant={resList[3]}/>
        <RestaurantCard restaurant={resList[4]}/> */}

        {list.map((res) => {
          return <RestaurantCard key={res.info.id} restaurant={res} />;
        })}
      </div>
    </>
  );
};

export default Body;
