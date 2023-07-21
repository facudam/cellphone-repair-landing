
import { Inter } from 'next/font/google'
import { Header } from '../components/ui'
import { Layout } from '../components/layout'
import { Servicios } from '../sections'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout title='Reparamos tu celular' description=''>
        <>
          <div className='flex justify-center px-3'>
            <Header />
          </div>
          
          <Servicios />
        </>
      </Layout>
    </>
  )
}
