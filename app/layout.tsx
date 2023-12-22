import type { Metadata } from 'next'
import './globals.css'
import { Footer, NavBar } from '@/components'


export const metadata: Metadata = {
  title: 'car hub',
  description: 'Best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className='relative'>
<NavBar/>
        {children}
        <Footer/>
        </body>

    </html>
  )
}
