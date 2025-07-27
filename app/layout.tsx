import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import Footer from '@/components/shared/footer'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
       <main className='h-screen'> {children}</main>
        <Footer />
        </ThemeProvider>
        </body>
    </html>
  )
}
