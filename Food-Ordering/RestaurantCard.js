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

export default RestaurantCard;