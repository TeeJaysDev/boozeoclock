import React from 'react'
import Image from 'next/image'
import favorite from "../../../public/icons8-heart-white.png";
import "../../styles/nav/Favorite.css"

const Favorite = () => {
  return (
    <div id="Favorite">
      <Image className='icon' src={favorite} width='37' height='37' alt='heart'></Image>
    </div>
  )
}

export default Favorite