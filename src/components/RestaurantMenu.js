import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import {addItem} from "../utils/cartSlice";
import { useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';
const RestaurantMenu=()=>{
    //how to read dynamic URL
    const params=useParams();
    // console.log(params);
    const {id}=params;
    const restaurant=useRestaurant(id);
    const dispatch=useDispatch();
    const addFoodItem=(item)=>{
        dispatch(addItem(item?.card?.info))
    }
    if(!restaurant)
        return <Shimmer />;
    else
    return (
        <div className="flex flex-wrap">
            <div className="menu">
                <h1>Restaurant id: {id}</h1>
                <h2>{restaurant?.cards[0]?.card?.card?.info?.name} </h2>
                <img src={IMG_CDN_URL+restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} className="w-40"/>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating}</h3>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
            </div>
            <div className="flex ">
                <div className="align-baseline py-12">
                <h1 className="text-2xl font-serif p-2 w-full ring-2    border-4 hover:rounded-full transition-delay-500 bg-orange-400" >Menu</h1>
                </div>
                <ul className="list-disc p-10" data-testid="menu">
                {(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)?.map((item)=>
                <li key={item?.card?.info?.id}>
                    {item?.card?.info?.name}-
                <button className="p-1 m-1 bg-pink-700 rounded-3xl shadow-black"
                data-testid="addBtn"
                onClick={()=>{addFoodItem(item)}}>
                    Add item
                </button>
                </li>)}
               </ul>
            </div>
        </div>
    )
}
export default RestaurantMenu;