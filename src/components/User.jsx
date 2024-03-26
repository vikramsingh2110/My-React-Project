import React from 'react'
import { useState } from 'react';

const User = (props) => {
  const [count,setCount] = useState(0)
  return (
    <div className='user-card'>
        <h1><button onClick={()=>{
         
          setCount(count+1)
        }}>counter : {count}</button></h1>
        <h2>Name: {props.name}</h2>
        <h3>Location: Gurugram</h3>
        <h4>Contact: vikramisme1221@gmail.com</h4>
    </div>
  )
}

export default User;