// Layout vai ser o componente que vai ser usado em todas as páginas
// Vai ficar em volta de todas as páginas
// Pode conter o header, footer, sidebar, etc

import { ReactNode } from "react"
import { useState } from "react";
import { Footer } from "./Footer"
import { Header } from "./Header"
import ProfileBox from "@/components/_ui/ProfileBox";

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
      {pageName != 'Signup' ? <Header /> : ''}

      {children}
      
      {profileBox && (<ProfileBox onToggle={toggleProfileBox} />)}

      {pageName != 'Signup' ? <Footer onToggleProfile={toggleProfileBox}/> : ''}
    </div>
  )
}