import React, { useState } from 'react'
import { useEffect } from 'react';
import { Menu_URL } from './constants';

const useRestaurantMenu = (resId) => {
    //fetchdata
  const [resInfo, setResInfo] = useState(null);
useEffect(()=>{
    fetchData();
},[])

const fetchData = async ()=>{
    const data = await fetch(Menu_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
}


  return resInfo; 
}

export default useRestaurantMenu