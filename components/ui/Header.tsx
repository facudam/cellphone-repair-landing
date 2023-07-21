import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className='flex items-center flex-wrap gap-5 justify-between w-full max-w-7xl min-heigth text-slate-600' >
        <div className='flex flex-col w-full max-w-xl gap-5'>
          <h1 className='text-6xl title-weight'>Reparación de celulares en Florencio Varela</h1>
          <p className='max-w-2xl text-lg text-slate-800'>Expertos en reparación de smartphones en zona sur. ¡Recupera la funcionalidad de tu celular con nosotros! Rápido, seguro y confiable. Tu celular en buenas manos.</p>
          <div className='flex gap-5'>
            <Link className='py-3 px-7 bg-sky-600 uppercase font-semibold text-white' href='/#servicios'>Nuestros servicios</Link>
            <Link className='py-3 px-7 font-semibold uppercase border border-sky-600 text-sky-600' href=''>Contactanos</Link>
          </div>
        </div>

        <div className='w-full max-w-md'>
          <Image src='/tecnicos-de-celulares.svg' width={500} height={100} alt='image' />
        </div>
    </header>
  )
}
