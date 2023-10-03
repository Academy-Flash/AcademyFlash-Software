// Layout vai ser o componente que vai ser usado em todas as páginas
// Vai ficar em volta de todas as páginas
// Pode conter o header, footer, sidebar, etc

import { ReactNode } from "react"
import { useState } from "react";
import { Footer } from "./Footer"
import { Header } from "./Header"
import ProfileBox from "@/components/_ui/ProfileBox";
import { motion, AnimatePresence } from "framer-motion"

interface LayoutInterface {
    children: ReactNode
}


export const Layout = ({ children }: LayoutInterface) => {
  const pageName = children?.type.name

  const [profileBox, setProfileBox] = useState(false); // Use useState for profile box

  function toggleProfileBox() {
    setProfileBox(prevProfileBox => !prevProfileBox);
  }

  return (
    <div className="w-[80%] m-auto h-[calc(100vh-64px)] relative overflow-y-auto pr-2">
      {pageName !== 'Signup' ? <Header /> : ''}

      <AnimatePresence initial={false}>
        {!profileBox ? (
          <motion.div 
            className="w-full h-full"
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }} >

            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {profileBox ? (
          <motion.div
            className="w-full h-full absolute z-20"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0%' }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            {/* Caixa de perfil */}
            <ProfileBox onToggle={toggleProfileBox} style={{ visibility: profileBox ? 'visible' : 'hidden' }} />
          </motion.div>
        ) : null}
      </AnimatePresence>

      {pageName !== 'Signup' ? <Footer onToggleProfile={toggleProfileBox}/> : ''}
    </div>

  )
}