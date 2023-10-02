// Layout vai ser o componente que vai ser usado em todas as páginas
// Vai ficar em volta de todas as páginas
// Pode conter o header, footer, sidebar, etc

import { ReactNode } from "react"
import { useState } from "react";
import { Footer } from "./Footer"
import { Header } from "./Header"
import ProfileBox from "@/components/_ui/ProfileBox";
import { motion } from "framer-motion"

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

      <div className={`transition-opacity duration-500 ease-in ${profileBox ? 'opacity-0 hidden pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
        {/* Conteúdo anterior */}
        {children}
      </div>

      <div className={`w-full h-full transition-all duration-500 transform absolute ${profileBox ? 'translate-x-0 pointer-events-auto opacity-100' : 'translate-x-full pointer-events-none opacity-0'} z-20`}>
        {/* Caixa de perfil */}
        <ProfileBox onToggle={toggleProfileBox} style={{ visibility: profileBox ? 'visible' : 'hidden' }} />
      </div>

      {pageName !== 'Signup' ? <Footer onToggleProfile={toggleProfileBox}/> : ''}

    </div>


  )
}