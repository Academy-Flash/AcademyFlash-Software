// Layout vai ser o componente que vai ser usado em todas as páginas
// Vai ficar em volta de todas as páginas
// Pode conter o header, footer, sidebar, etc

import { ReactNode } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { useRouter } from 'next/router';

interface LayoutInterface {
    children: ReactNode
}

export const Layout = ({ children }: LayoutInterface) => {
  const router = useRouter();

  // O objeto router contém informações sobre a rota atual
  const pageName = router.pathname;

  return (
    <div className="w-[80%] m-auto h-[calc(100vh-64px)] relative overflow-hidden px-2 bg-gray-700 text-white layout-principal">
      
      {children}

      {!['/signup', '/signin'].includes(pageName) ? <Footer /> : ''}
    </div>

  )
}