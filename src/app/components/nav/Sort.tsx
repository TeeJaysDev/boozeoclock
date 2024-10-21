import React from 'react'
import Image from 'next/image'
import sort from '../../assets/icons8-sort.png'
import "../../styles/nav/Sort.css"

const Sort = () => {
  return (
    <div id='Sort'>
      <Image className='icon' src={sort} width='30' height='30' alt='sort'></Image>
    </div>
  )
}

export default Sort