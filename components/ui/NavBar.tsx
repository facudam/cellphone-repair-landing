import Image from "next/image"
import Link from "next/link"


const NavBar = () => {
  return (
    <div className="flex justify-center border-b py-2 px-3">
      <nav className='flex w-full max-w-7xl sp justify-between items-center '>
          <Link href='/' className="flex gap-1 justify-center items-center">
            <Image src='/mob-repair.png' width='50' height={100} alt="logo" />
            <span className="uppercase font-semibold">Reparación de celulares</span>
          </Link>
          <ul className="flex gap-7 uppercase">
            <li>
              <Link href='/'>Servicios</Link>  
            </li>
            <li>
              <Link href='/'>Sobre nosotros</Link>
            </li>
            <li>
              <Link href='/'>Contacto</Link>
            </li>
          </ul>  
      </nav>
   </div>
  )
}

export default NavBar