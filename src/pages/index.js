import { Inter } from 'next/font/google'
import Hero from '@/components/layout/Hero'
import Technologies from '@/components/technologies/Technologies'
import Projects from '@/components/layout/Projects'
import Contact from '@/components/layout/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero/>
      <Technologies/>
      <Projects/>
      <Contact/>
    </>
  )
}
