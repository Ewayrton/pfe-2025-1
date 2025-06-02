"use client"

import { motion } from "framer-motion"

export default function Contato({ showContact, setShowContact }) {
  return (
    <>
      {showContact && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gray-900 p-8 rounded-lg shadow-lg border border-green-500 max-w-sm w-full text-center"
          >
            <h2 className="text-xl font-bold text-green-400 mb-4">Entre em Contato</h2>
            <p className="text-gray-300 mb-4">📧 ewayrton.unicap@gmail.com</p>
            
            <a
              href="https://wa.me/5581997657027?text=Ol%C3%A1%20Ewayrton%2C%20vim%20pelo%20seu%20portf%C3%B3lio!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mb-4 inline-block"
            >
              Mandar Mensagem no WhatsApp
            </a>
            
            <button
              onClick={() => setShowContact(false)}
              className="text-gray-400 hover:text-red-400 transition-colors mt-2"
            >
              Fechar
            </button>
          </motion.div>
        </div>
      )}
    </>
  )
}