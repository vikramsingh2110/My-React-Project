import React, { useContext } from "react";
import  ReactDOM from "react-dom/client";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,avgRating,costForTwo,cuisines,cloudinaryImageId} = resData?.info;
    const {loggedInUser} = useContext(UserContext)
    
    return (
      <div className="m-4 p-4 w-[250px] rounded-md bg-gray-100 hover:bg-gray-200" >
        <img className="rounded-md" src={ CDN_URL + cloudinaryImageId}></img>
        <h3 className="font-bold py-4 text-md ">{name}</h3>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{ cuisines.join(", ")}</h4>
        <h4>User : {loggedInUser}</h4>
        
        
      </div>
    )
  }

  export const withVegLabel = (RestaurantCard) =>{
    return (props)=>{
      return (
        <div>
        <label className="absolute bg-green-600 text-white m- p-2 rounded-md">Veg</label>
        <RestaurantCard {...props}/>
       </div>
      )
    }
  }

  export default RestaurantCard;