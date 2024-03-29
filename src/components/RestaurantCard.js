import { IMG_CDN_URL } from "../config";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString}) => {
    // const {name,cuisines,lastMileTravelString,cloudinaryImageId}=restaurant;//this line is wrong
    const {user} = useContext(UserContext);
    return (
      <>
      <div className="card w-56 p-2 m-2 shadow-lg bg-pink-100 whitespace-normal break-words">
        <img src={IMG_CDN_URL+cloudinaryImageId}></img>
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h4>{lastMileTravelString} </h4>
        <h4 className="font-bold">
          {user.name}-{user.email}
        </h4>
      </div>
      
      </>
    );
};
export default RestaurantCard;