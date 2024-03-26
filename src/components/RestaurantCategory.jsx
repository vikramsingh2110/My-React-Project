import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = (data, showItems, setShowIndex,dummy ) => {
   // console.log(data)
   // const [showItems,setShowItems] = useState(false);

   const handleClick =() => {
   // console.log("Clicked");
    setShowIndex();

   } 
  return <div>
     { /*Header*/}
     
       <div className='w-full mx-auto my-4 bg-gray-50 shadow-lg p-4 '>
       <div className=' flex justify-between cursor-pointer' >
       <span className='font-bold text-lg'>
            {data.data.title} ({data.data.itemCards.length})</span>
        <span>🔽</span>
         </div>
       
       {showItems && <ItemList items = {data.data.itemCards} dummy = {dummy} />} 
       </div>
     { /*Body*/}
    
  </div>
   
}

export default RestaurantCategory