import React from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItems } from '../utils/cartSlice';

const ItemList = (items, {dummy})=> {

  
  const dispatch = useDispatch();

  const handleAddItem = (item)=>{
    dispatch(addItems(item))
  }

   console.log(dummy)
  return(
    <div>
        {items.items.map((item)=>(
        <div key={item.card.info.id} 
        className='p-2 m-2 border border-gray-2200 border-b-2 text-left flex '>
            <div className='w-40 p-4 justify-between'> 
               <div className='absolute'>
                <button className=
                'p-2 mx-8 rounded-md bg-black text-white shadow-lg absolute'
                onClick={()=>handleAddItem(item)}
                >
                  Add+</button>
               </div> 
               <img src={CDN_URL + item.card.info.imageId}  />
            </div>

            <div>
            <div className='py-2'>
                <span>{item.card.info.name}</span>
                <span> - ₹{item.card.info.price/100}</span>
            </div>
            <p className='text-xs'>{item.card.info.description}</p>
            </div>
        </div>
        ))}
    </div>
  )
}

export default ItemList