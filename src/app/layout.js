import { Petrona } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image'
const petrona = Petrona({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={petrona.className}>
        <div className='container'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
