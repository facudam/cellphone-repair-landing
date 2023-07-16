import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className='flex items-center flex-wrap gap-5 justify-between w-full max-w-7xl heigth-75vh' >
        <div className='flex flex-col w-full max-w-xl gap-5'>
          <h1 className='text-5xl font-bold'>Reparación de celulares en Florencio Varela y zona sur</h1>
          <p className='max-w-2xl text-lg'>Expertos en reparación de smartphones. ¡Recupera la funcionalidad de tu celular con nosotros! Rápido, seguro y confiable. Tu celular en buenas manos.</p>
          <div className='flex gap-5'>
            <Link className='py-3 px-7 bg-sky-800 uppercase font-semibold text-white' href='/'>Nuestros servicios</Link>
            <Link className='py-3 px-7 font-semibold uppercase border border-sky-800 text-sky-800' href=''>Contactanos</Link>
          </div>
        </div>

        <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
          <Image src='/smartphone.png' width={500} height={100} alt='image' />
        </div>
    </header>
  )
}
