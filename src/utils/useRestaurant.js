import { useState,useEffect} from "react";
import { FETCH_MENU_URL } from "../config";
const useRestaurant=(id)=>{
    const [restaurant,setRestaurant]=useState(null);
    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo()
    {
        try{
        const data=await fetch(FETCH_MENU_URL+id);
        const json=await data.json()
        // console.log(json?.data?.cards[0]?.card?.card);
        console.log(json?.data);
        setRestaurant(json?.data);
        }catch(error)
        {
            console.log(error)
        }
    }
    return restaurant;
}

export default useRestaurant;