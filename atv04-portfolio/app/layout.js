import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ewayrton Oliveira - Portfólio - Desenvolvedor Full Stack",
  description: "Portfólio pessoal desenvolvido com Next.js e React",
  generator: "v0.dev",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-black border-t border-gray-800 text-gray-300 py-8 text-center">
          <div className="max-w-7xl mx-auto px-4">
            <p>&copy; 2025 Ewayrton Oliveira - Portfólio. Desenvolvido com Next.js e React.</p>
            <p className="text-sm text-gray-500 mt-2">Feito com carinho e muito código</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
