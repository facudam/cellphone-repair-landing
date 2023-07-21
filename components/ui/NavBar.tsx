import Image from "next/image"
import Link from "next/link"


export const NavBar = () => {
  return (
   <>
    <div className="flex justify-center py-2 px-3 w-full bg-gradient text-slate-600">
      <nav className='flex w-full max-w-7xl justify-between items-center'>
          <Link href='/' className="flex justify-center items-center">
            <Image src='/mob-repair.webp' width='50' height={100} alt="logo" />
            <span className=" text-lg logo-family uppercase">Reparación De Celulares</span>
          </Link>
          
          <ul className="flex gap-7 uppercase font-semibold">
            <li><Link href='/'>Servicios</Link></li>
            <li><Link href='/'>Sobre nosotros</Link></li>
            <li><Link href='/'>Contacto</Link></li>
          </ul> 
          <div className="flex justify-center items-center py-2 gap-3">
            <Link href='/'>
              <Image src='/logo-facebook.svg' alt="icono de facebook" width={25} height={25}/>
            </Link>
            <Link href='/'>
              <Image src='/logo-instagram.svg' alt="icono de instagram" width={22} height={25} />
            </Link> 
            <Image src='/logo-whatsapp.svg' alt="icono de whatsapp" width={25} height={25} /> 
          </div>
      </nav>
    </div>
   </>
  )
}

export default NavBar