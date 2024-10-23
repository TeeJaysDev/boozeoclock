import Image from 'next/image'
import sort from '../../../public/icons8-sort.png'
import "../../styles/nav/Sort.css"

const Sort = () => {
  return (
    <div id='Sort'>
      <Image className='icon' src={sort} width='30' height='30' alt='sort'></Image>
    </div>
  )
}

export default Sort