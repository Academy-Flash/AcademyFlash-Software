// Layout vai ser o componente que vai ser usado em todas as páginas
// Vai ficar em volta de todas as páginas
// Pode conter o header, footer, sidebar, etc

import { ReactNode } from "react"
import { Search } from '../_ui/Search/index'

interface LayoutInterface {
    children: ReactNode
}

export const Layout = ({ children }: LayoutInterface) => {
    return (
        <>
            <header>
                <h1>Header</h1>
            </header>
            <Search />
            {children}
        </>
    )
}