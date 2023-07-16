import Image from "next/image"
import Link from "next/link"


export const NavBar = () => {
  return (
   <>
    <div className="flex justify-center border-b py-2 px-3 w-full">
      <nav className='flex w-full max-w-screen-2xl sp justify-between items-center'>
          <Link href='/' className="flex justify-center items-center">
            <Image src='/mob-repair.png' width='50' height={100} alt="logo" />
            <span className="uppercase font-mono text-1xl">Reparación de celulares</span>
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
    <div className="flex justify-center items-center py-2 gap-3">
      <Link href='/'>
        <Image src='/logo-facebook.svg' alt="icono de facebook" width={25} height={25}/>
      </Link>
      <Link href='/'>
        <Image src='/logo-instagram.svg' alt="icono de instagram" width={22} height={25} />
      </Link> 
      <Image src='/logo-whatsapp.svg' alt="icono de whatsapp" width={25} height={25} /> 
    </div>
   </>
  )
}

export default NavBar