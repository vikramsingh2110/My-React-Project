import React from "react";
import  ReactDOM from "react-dom/client";
import RestaurantCard, {withVegLabel} from "./RestaurantCard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
 


let listOfRestaurantsJS = [
  // {
  //   "info": {
  //   "id": "100721",
  //   "name": "McDonald's",
  //   "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
  //   "costForTwo": "₹400 for two",
  //   "cuisines": [
  //   "Burgers",
  //   "Beverages",
  //   "Cafe",
  //   "Desserts"
  //   ],
  //   "avgRating": 4.4,
  //   "parentId": "630",
  //   "avgRatingString": "4.4",
  //   "totalRatingsString": "5K+",
  //   }, 
  //   },

  //   {
  //     "info": {
  //     "id": "12111",
  //     "name": "KFC",
  //     "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
  //     "costForTwo": "₹400 for two",
  //     "cuisines": [
  //     "Burgers",
  //     "Beverages",
  //     "Cafe",
  //     "Desserts"
  //     ],
  //     "avgRating": 3.6,
  //     "parentId": "630",
  //     "avgRatingString": "3.6",
  //     "totalRatingsString": "5K+",
  //     }, 
  //     }
];

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants ] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState(""); 
  const RestaurantCardVeg = withVegLabel(RestaurantCard);


  //console.log(listOfRestaurants)
  useEffect(()=>{
    fetchData();
  },[]) 

 
  
  const fetchData = async () => {
    const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
   
    //console.log(json);
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus==false) 
  return 
  <h1>Looks like you are offline!!!</h1>

    return listOfRestaurants.length ==0 ? <Shimmer/> : (
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input type="text" className="border border-solid border-black" 
            value={searchText} 
            onChange={(e)=>{
              setSearchText(e.target.value);
            }}/>
            <button className="px-4 py-2 rounded m-4 bg-green-100" onClick={()=>{
              //filter the restaurant cards and update the UI

              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter
              ((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
            
            >Search</button>
          </div>
            <div className="seaarch m-4 p-4 flex items-center">
            <button className="px-4 py-2 bg-gray-100 rounded" onClick={()=>{
               
                const filteredList = listOfRestaurants.filter(
                  (res)=>res.info.avgRating > 4.4
                );
                setListOfRestaurants(filteredList)
            }}
             
            >
                Top Rated Restaurants</button>
                </div>
        </div>
        <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
       <Link key={restaurant.info.id}
       to={"/restaurants/" + restaurant.info.id}
       > 
  
      {restaurant.info.veg ? (
      <RestaurantCardVeg resData={restaurant}/> 
      ) : (
      <RestaurantCard resData={restaurant}/>
       )}
       </Link> 
        ))}
       
        </div>
      </div>
    )
  }

  
export default Body;