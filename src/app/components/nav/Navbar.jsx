import React from 'react'
import Favorite from './Favorite'
import Filter from './Filter'
import Logo from './Logo'
import SearchBar from './SearchBar'
import Sort from './Sort'
import "../../styles/nav/Navbar.css"

const Navbar = () => {
  return (
    <div id="Navbar">
      <Logo />
      <SearchBar />
      <Filter />
      <Sort />
      <Favorite />
    </div>
  )
}

export default Navbar
