import Image from "next/image"
import Link from "next/link"


export const NavBar = () => {
  return (
   <>
    <div className="flex justify-center py-2 px-3 w-full text-slate-600 relative">
      <nav className='flex w-full max-w-7xl justify-between items-center'>
          <Link href='/' className="flex justify-center items-center">
            <Image className="w-10 lg:w-12" src='/mob-repair.webp' width='50' height={100} alt="logo" />
            <span className=" text-base lg:text-lg logo-family uppercase">Reparación De Celulares</span>
          </Link>
          <div className="flex flex-col gap-1.5 lg:hidden">
            <span className="w-6 h-0.5 bg-slate-600"></span>
            <span className="w-6 h-0.5 bg-slate-600"></span>
            <span className="w-6 h-0.5 bg-slate-600"></span>
          </div>
          <div className="flex flex-col w-4/5 h-screen absolute bg-slate-300 top-0 right-0 p-10 lg:width-auto">
            <div className="flex flex-col bg-white w-8 h-8 justify-center items-center relative self-end">
              <span className="w-6 h-0.5 bg-slate-600 rotate-45 absolute"></span>
              <span className="w-6 h-0.5 bg-slate-600 -rotate-45"></span>
            </div>
            <ul className=" flex flex-col gap-7 uppercase font-semibold">
              <li><Link href='/'>Servicios</Link></li>
              <li><Link href='/'>Sobre nosotros</Link></li>
              <li><Link href='/'>Contacto</Link></li>
            </ul>
          </div>
           
          {/* <div className="flex justify-center items-center py-2 gap-3">
            <Link href='/'>
              <Image src='/logo-facebook.svg' alt="icono de facebook" width={25} height={25}/>
            </Link>
            <Link href='/'>
              <Image src='/logo-instagram.svg' alt="icono de instagram" width={22} height={25} />
            </Link> 
            <Image src='/logo-whatsapp.svg' alt="icono de whatsapp" width={25} height={25} /> 
          </div> */}
      </nav>
    </div>
   </>
  )
}

export default NavBar