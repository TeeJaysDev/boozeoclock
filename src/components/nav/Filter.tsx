import Image from 'next/image'
import filter from '../../../public/icons8-filter.png'
import "../../styles/nav/Filter.css"

const Filter = () => {
  return (
    <div id='Filter'>
      <Image className='icon' src={filter} width='30' height='30' alt='filter'></Image>
    </div>
  )
}

export default Filter