import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className='flex justify-center items-center w-full max-w-screen-2xl heigth-75vh' >
        <div>
          <h1 className='text-5xl font-bold max-w-3xl text-center'>Reparación de celulares en Florencio Varela y zona sur</h1>
          <p className='max-w-2xl text-center text-lg'>Expertos en reparación de smartphones. ¡Recupera la funcionalidad de tu celular con nosotros! Rápido, seguro y confiable. Tu celular en buenas manos.</p>
          <Link className='py-3 px-7 bg-sky-800 uppercase font-semibold text-white' href='/'>Nuestros servicios</Link>
        </div>
        
    </header>
  )
}
