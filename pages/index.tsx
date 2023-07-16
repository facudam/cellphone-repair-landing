import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '../components/ui'
import { Layout } from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout title='Reparamos tu celular' metaTitle='' description=''>
        <Header />
      </Layout>
    </>
  )
}
