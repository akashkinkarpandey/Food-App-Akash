import { IMG_CDN_URL } from "../config";
const FoodItem = ({name,category,imageId,price}) => {
    // const {name,cuisines,lastMileTravelString,cloudinaryImageId}=restaurant;//this line is wrong
    return (
      <>
      <div className="card w-56 p-2 m-2 shadow-lg bg-cyan-700-100 whitespace-normal break-words">
        <img src={IMG_CDN_URL+imageId}></img>
        <h2 className="font-bold ">{name}</h2>
        <h3>{category}</h3>
        <h4>Rupees:{price/100}</h4>
      </div>
      
      </>
    );
};
export default FoodItem;