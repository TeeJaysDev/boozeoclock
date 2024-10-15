import React from 'react'
import "../../styles/nav/SearchBar.css"

const SearchBar = () => {
  return (
    <form id="SearchBar">
      <input id="SearchBar-input" type="text" placeholder="Search" name="search"></input>
      <button id="SearchBar-button" type="submit"></button>
    </form>
  )
}

export default SearchBar