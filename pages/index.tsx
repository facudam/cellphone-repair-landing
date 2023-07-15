import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '../components/ui/NavBar'
import { Header } from '@/components/ui/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <NavBar />
      <Header />
    </main>
  )
}
