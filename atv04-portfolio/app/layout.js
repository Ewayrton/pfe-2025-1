import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import PageTransition from "./components/PageTransition"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Meu Portfólio - Desenvolvedor Full Stack",
  description: "Portfólio pessoal desenvolvido com Next.js e React",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        <PageTransition>
          <main className="min-h-screen">{children}</main>
        </PageTransition>
        <footer className="bg-black border-t border-gray-800 text-gray-300 py-8 text-center">
          <div className="max-w-7xl mx-auto px-4">
            <p>&copy; 2024 Meu Portfólio. Desenvolvido com Next.js e React.</p>
            <p className="text-sm text-gray-500 mt-2">Feito com 💚 e muito código</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
