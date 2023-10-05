import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gabriel de Souza',
  description: 'Portifólio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/logoBranca.svg" />
      </head>
      <body className={inter.className}>

        {children}</body>
    </html>
  )
}
