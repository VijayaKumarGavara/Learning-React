const RestaurantCard = (props) => {
  const { avgRating, cloudinaryImageId, costForTwo, cuisines, name } =
    props.restaurant.info;
  const { deliveryTime } = props.restaurant.info.sla;
  return (
    <div className="h-80 w-64 flex flex-col items-center  border-transparent bg-slate-50 shadow-2xl rounded-lg hover:cursor-pointer hover:bg-slate-200">
      <div className="h-36 w-44 m-2">
        <img
          alt="res-logo"
          className="h-full w-full object-cover rounded-lg"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            cloudinaryImageId
          }
        />
      </div>
      <h4 className="font-medium mx-4">{name}</h4>
      <p className="mx-6">{cuisines.join(", ")}</p>
      <h4>{costForTwo}</h4>
      <div className="flex flex-row justify-between">
      <h4 className="mx-2">{avgRating} stars</h4>
      <h4 className="mx-2">{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <div>
          <label className=" absolute bg-blue-950 text-white font-medium px-3 rounded-lg">
            Best
          </label>
          <RestaurantCard restaurant={props.restaurant} />
        </div>
      </>
    );
  };
};
