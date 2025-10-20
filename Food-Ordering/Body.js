import RestaurantCard from "./RestaurantCard";
import { resList } from "./utils/mockData";



const Body = () => {
  return (
    <>
      <div className="search">Search</div>
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

        {
            resList.map((res, index)=>{
                return <RestaurantCard  key={index} restaurant={res}/>
            })
        }
      </div>
    </>
  );
};

export default Body;