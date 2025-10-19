import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images-platform.99static.com//s_-2qgRrPZnWUpWIh4NeIu95UCE=/0x0:999x999/fit-in/500x500/99designs-contests-attachments/118/118612/attachment_118612943"
          alt="app-logo"
        />
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resObj = {
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNckxGSvE5XgenGda7gx3k8bE1Q9DDodpCQg&s",
  resName: "SVG Grand",
  cuisines: ["Biryani, Fried Rice, Starters, Lollypups"],
  resRating: 4.5,
  delevieryTime: 35,
};

const resList = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNckxGSvE5XgenGda7gx3k8bE1Q9DDodpCQg&s",
    resName: "SVG Grand",
    cuisines: ["Biryani, Fried Rice, Starters, Lollypups"],
    resRating: 4.5,
    delevieryTime: 35,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNckxGSvE5XgenGda7gx3k8bE1Q9DDodpCQg&s",
    resName: "Janata Restaurant",
    cuisines: ["Biryani, Fried Rice, Noodles"],
    resRating: 4.1,
    delevieryTime: 15,
  },
  {
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNckxGSvE5XgenGda7gx3k8bE1Q9DDodpCQg&s",
    resName: "Spice Hub",
    cuisines: ["North Indian, Chinese, Tandoori"],
    resRating: 4.3,
    delevieryTime: 25,
  },
  {
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNckxGSvE5XgenGda7gx3k8bE1Q9DDodpCQg&s",
    resName: "Urban Tadka",
    cuisines: ["Punjabi, Curries, Rotis"],
    resRating: 4.6,
    delevieryTime: 30,
  },
  {
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNckxGSvE5XgenGda7gx3k8bE1Q9DDodpCQg&s",
    resName: "Chili Chatka",
    cuisines: ["Street Food, Fast Food, Chats"],
    resRating: 4.0,
    delevieryTime: 20,
  },
  {
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNckxGSvE5XgenGda7gx3k8bE1Q9DDodpCQg&s",
    resName: "Tandoori Tales",
    cuisines: ["Grill, Kebab, Roti, Curry"],
    resRating: 4.4,
    delevieryTime: 28,
  },
  {
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNckxGSvE5XgenGda7gx3k8bE1Q9DDodpCQg&s",
    resName: "Rice Bowl Express",
    cuisines: ["Chinese, Fried Rice, Noodles"],
    resRating: 3.9,
    delevieryTime: 18,
  },
  {
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNckxGSvE5XgenGda7gx3k8bE1Q9DDodpCQg&s",
    resName: "Biryani Pot",
    cuisines: ["Hyderabadi, Dum Biryani, Starters"],
    resRating: 4.7,
    delevieryTime: 40,
  },
  {
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNckxGSvE5XgenGda7gx3k8bE1Q9DDodpCQg&s",
    resName: "The Veggie Bowl",
    cuisines: ["South Indian, Veg Thali, Dosa"],
    resRating: 4.2,
    delevieryTime: 22,
  },
  {
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNckxGSvE5XgenGda7gx3k8bE1Q9DDodpCQg&s",
    resName: "Foodie’s Point",
    cuisines: ["Indian, Continental, Juices"],
    resRating: 4.1,
    delevieryTime: 27,
  },
  {
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNckxGSvE5XgenGda7gx3k8bE1Q9DDodpCQg&s",
    resName: "Taste Factory",
    cuisines: ["Chinese, Rolls, Fast Food"],
    resRating: 3.8,
    delevieryTime: 19,
  },
  {
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNckxGSvE5XgenGda7gx3k8bE1Q9DDodpCQg&s",
    resName: "Royal Kitchen",
    cuisines: ["Mughlai, Kebabs, Biryani"],
    resRating: 4.5,
    delevieryTime: 33,
  },
  {
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNckxGSvE5XgenGda7gx3k8bE1Q9DDodpCQg&s",
    resName: "Curry Leaf",
    cuisines: ["South Indian, Veg Meals"],
    resRating: 4.3,
    delevieryTime: 24,
  },
  {
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNckxGSvE5XgenGda7gx3k8bE1Q9DDodpCQg&s",
    resName: "Noodle House",
    cuisines: ["Asian, Noodles, Manchurian"],
    resRating: 4.0,
    delevieryTime: 17,
  },
  {
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNckxGSvE5XgenGda7gx3k8bE1Q9DDodpCQg&s",
    resName: "Rolls & Bowls",
    cuisines: ["Wraps, Rice Bowls, Fast Food"],
    resRating: 4.1,
    delevieryTime: 21,
  },
  {
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNckxGSvE5XgenGda7gx3k8bE1Q9DDodpCQg&s",
    resName: "BBQ Nation Mini",
    cuisines: ["Buffet, Grills, Desserts"],
    resRating: 4.6,
    delevieryTime: 38,
  },
  {
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNckxGSvE5XgenGda7gx3k8bE1Q9DDodpCQg&s",
    resName: "Cafe Treats",
    cuisines: ["Burgers, Sandwiches, Coffee"],
    resRating: 3.9,
    delevieryTime: 16,
  },
];

const RestaurantCard = (props) => {
  const { image, resName, cuisines, resRating, delevieryTime } = props.restaurant;
  return (
    <div className="res-card">
      <div className="res-logo-container">
        <img alt="res-logo" className="res-logo" src={image} />
      </div>
      <h3>{resName}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{resRating} stars</h4>
      <h4>{delevieryTime} minutes</h4>
    </div>
  );
};
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
const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
root.render(<App />);
