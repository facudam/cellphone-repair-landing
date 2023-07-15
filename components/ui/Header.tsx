import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className='flex flex-col justify-center items-center heigth-75vh bgd-image relative'>
        <Image className='h-image' src='/smartphone-arreglo.webp' alt='reparar celular' width={100} height={75} />
        <h1 className='z-10'>Reparación de celulares en Florencio Varela y zona sur</h1>
        <p className='z-10'>Expertos en reparación de smartphones. ¡Recupera la funcionalidad de tu celular con nosotros! Rápido, seguro y confiable, Tu celular en buenas manos.</p>
        <Link className='z-10' href='/'>Nuestros servicios</Link>
    </header>
  )
}
