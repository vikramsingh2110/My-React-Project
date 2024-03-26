import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { Menu_URL } from '../utils/constants';

import React, { useState } from 'react'
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
//const [resInfo,setResInfo] = useState(null);
const dummy = "Dummy data"
const {resId} = useParams();
// const params = useParams();
// console.log(params);

    // useEffect (()=>{
    //     fetchMenu();
    // },[]);
const resInfo = useRestaurantMenu(resId);

// const fetchMenu = async () => {
//     const data = await fetch (
//         Menu_URL +resId
//     );
//     const json = await data.json();
//     console.log(json);
//     setResInfo(json.data);
// };
console.log(resInfo)
const [showIndex,setShowIndex] = useState(0)

if(resInfo==null) return <Shimmer />
 
const {name, cuisines,costForTwo} = resInfo?.cards[2]?.card?.card?.info;
const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
//console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
//console.log(categories);

 return (
    <div className='text-center'>
        <h1 className='font-bold my-5 text-2xl'>{name}</h1>
        <p className='font-bold text-lg'>
            {cuisines.join (", ")} - {costForTwo}
        </p>
        {/* <h2>Menu</h2>
        <ul>
            {itemCards.map(item =><li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 ||item.card.info.defaultPrice/100 }</li> )}

        </ul> */}
        {
            categories.map((category,index)=>(
                <RestaurantCategory 
                key ={category?.card?.card?.title} 
                data={category?.card?.card}
                showItems = {index==0 ? true : false}
                setShowIndex = {()=>setShowIndex(index)}
                dummy = {dummy}
                />
            ))}


    </div>
  )
 }

export default RestaurantMenu