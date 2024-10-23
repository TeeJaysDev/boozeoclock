import Link from "next/link";
import Image from 'next/image'
import "../../styles/nav/Logo.css"
import sangria from '../../../public/icons8-sangria-64.png'

const Logo = () => {
  return (
    <div id='Logo'>
      <Link href="/">
        <Image id='Logo-Image' src={sangria} alt='logo'></Image>
        <h1 id='Logo-h1'>booze o&apos;clock</h1>
      </Link>
    </div>
  )
}

export default Logo