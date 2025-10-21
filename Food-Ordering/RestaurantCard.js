const RestaurantCard = (props) => {
  const {avgRating, cloudinaryImageId, costForTwo, cuisines, name} = props.restaurant.info;
  const {deliveryTime}=props.restaurant.info.sla;
  return (
    <div className="res-card">
      <div className="res-logo-container">
        <img alt="res-logo" className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+cloudinaryImageId} />
      </div>
      <h4>{name}</h4>
      <p>{cuisines.join(", ")}</p>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;