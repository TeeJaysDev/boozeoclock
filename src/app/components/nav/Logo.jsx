import React from 'react'
import Image from 'next/image'
import "../../styles/nav/Logo.css"
import sangria from '../../assets/icons8-sangria-64.png'

const Logo = () => {
  return (
    <div id='Logo'>
      <a href='/'>
        <Image id='Logo-Image' src={sangria} alt='logo'></Image>
        <h1 id='Logo-h1'>booze o&apos;clock</h1>
      </a>
    </div>
  )
}

export default Logo