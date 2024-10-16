import React from 'react'
import GetCocktails from '../../API/GetCocktails'
import '../../styles/main/Main.css'

function Main() {
    return (
        <>
            <h1 id="Main-h1">Home</h1>
            <GetCocktails />
        </>
    )
}

export default Main