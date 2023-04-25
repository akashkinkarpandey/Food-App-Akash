import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
// import UserContext from "../utils/UserContext";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";
const Body = () => {
    // let searchText = "hii";
    const [searchText,setSearchText]=useState("");//returns array
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    const [allRestaurants,setAllRestaurants]=useState([]);
    const {user,setUser}=useContext(UserContext);
    // const [searchClick,setsearchClick]=useState("true");
    // console.log('hi')
    useEffect(()=>{
        // console.log('calledd due to search hehe')
        getRestaurants();//called after rendering has happened
    },[]);//called only once throughout after 1st render
    async function getRestaurants(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json();
        console.log(json);
        setAllRestaurants
        (json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants
        (json?.data?.cards[2]?.data?.data?.cards);
    }
    const isOnline=useOnline();
    if(!isOnline)
    {
        return <h1>Offline please check your internet connection</h1>
    }
    console.log('render')
    //not render component early return
    // if(filteredRestaurants?.length===0)
    //     return <h1>No Restaurant matched your filter</h1>;
    return (allRestaurants.length===0)? <Shimmer/>:(filteredRestaurants?.length===0)?
     <h1>No Restaurant matched your filter</h1>:(
        <>
            <div className="search-container p-5 bg-pink-50 my-1">
                <input
                    data-testid="search-input"
                    type="text"
                    className="search-input focus:bg-green-50 m-2 p-2"
                    placeholder="Search"
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                />
                {/* <h1>{searchClick}</h1> */}
                {/* <button className="search-btn">Search- {searchText} </button> */}
                {/* <button className="search-btn" onClick={()=>(searchClick==="true")?setsearchClick("false"):setsearchClick("true")}>Search- {searchText} </button> */}
                <button data-testid="search-btn" className="p-2 m-5 bg-purple-500 hover:bg-blue-700 text-white rounded-xl" 
                onClick={()=>{
                    const data=filterData(searchText,allRestaurants);
                    setFilteredRestaurants(data);
                }}>Search</button>
                {/* <button className="search-btn">Search</button> */}
                {/* <input value={user.name} onChange={(e)=>{setUser({
                    name:e.target.value,
                    email:"newemail@gmail.com"
                })}}></input> */}
                <input 
                value={user.name} onChange={(e)=>{setUser({
                    ...user,
                    name:e.target.value
                })}}></input>
                <input value={user.email} onChange={(e)=>{setUser({
                    ...user,
                    email:e.target.value
                })}}></input>
            </div>
            <div className="restaurant-list flex flex-wrap" data-testid="res-list">
                {
                    // both are same below
                    // restaurantList.map((restaurant)=>{return <RestaurantCard {...restaurant.data}/>;})
                    filteredRestaurants.map((restaurant) => (
                        <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
                            <RestaurantCard {...restaurant.data}  />
                        </Link>
                    ))
                    /* <RestaurantCard {...restaurantList[0].data}/>
                  <RestaurantCard {...restaurantList[1].data}/>
                  <RestaurantCard {...restaurantList[2].data}/>
                  <RestaurantCard {...restaurantList[3].data}/>
                  <RestaurantCard {...restaurantList[4].data}/>
                  <RestaurantCard {...restaurantList[5].data}/>
                  <RestaurantCard {...restaurantList[6].data}/>
                  <RestaurantCard {...restaurantList[7].data}/>
                  <RestaurantCard {...restaurantList[8].data}/>
                  <RestaurantCard {...restaurantList[9].data}/>
                  <RestaurantCard {...restaurantList[10].data}/> */
                }
            </div>
            {/* {console.log('yum')} */}

        </>
    );
};
export default Body;
