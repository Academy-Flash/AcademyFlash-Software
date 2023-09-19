// Layout vai ser o componente que vai ser usado em todas as páginas
// Vai ficar em volta de todas as páginas
// Pode conter o header, footer, sidebar, etc

import { ReactNode } from "react"
import { Footer } from "./Footer"

interface LayoutInterface {
    children: ReactNode
}

export const Layout = ({ children }: LayoutInterface) => {
    return (
        <>
            {/* <header>
                oi
            </header> */}
            {children}
            
            <Footer />
        </>
    )
}