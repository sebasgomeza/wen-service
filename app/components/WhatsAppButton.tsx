"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BOTÓN FLOTANTE */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-teal-500 hover:bg-teal-400 text-black p-4 rounded-full shadow-xl text-xl"
      >
        💬
      </button>

      {/* VENTANA DE CHAT */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* HEADER */}
            <div className="bg-teal-500 text-black p-4 font-bold">
              Chat de Ayuda
            </div>

            {/* MENSAJES */}
            <div className="p-4 space-y-3 text-sm text-gray-300">
              <div className="bg-neutral-800 p-3 rounded-lg">
                👋 ¡Hola! Soy el asistente de WenService.<br />
                ¿En qué te puedo ayudar?
              </div>
            </div>

            {/* BOTONES */}
            <div className="p-4 grid grid-cols-2 gap-3">
              <a
                href="#packages"
                onClick={() => setOpen(false)}
                className="bg-teal-500 hover:bg-teal-400 text-black text-center py-2 rounded-lg font-semibold"
              >
                Precios
              </a>

              <a
                href="#services"
                onClick={() => setOpen(false)}
                className="bg-teal-500 hover:bg-teal-400 text-black text-center py-2 rounded-lg font-semibold"
              >
                Servicios
              </a>

              <a
                href="#portfolio"
                onClick={() => setOpen(false)}
                className="bg-teal-500 hover:bg-teal-400 text-black text-center py-2 rounded-lg font-semibold col-span-2"
              >
                Ver Portafolio
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
