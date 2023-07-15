import Image from "next/image"
import Link from "next/link"


const NavBar = () => {
  return (
    <nav className='flex py-3.5 px-3.5 border-b'>
        <Link href='/' className="flex gap-3 justify-center items-center">
          <Image src='/mobile-repair.png' width='50' height={100} alt="logo" />
          <span>Reparación de celulares</span>
        </Link>  
    </nav>
  )
}

export default NavBar