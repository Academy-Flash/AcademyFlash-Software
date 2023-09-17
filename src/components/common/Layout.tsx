// Layout vai ser o componente que vai ser usado em todas as páginas
// Vai ficar em volta de todas as páginas
// Pode conter o header, footer, sidebar, etc

import { ReactNode } from "react"
//react icons
import { ImMenu } from 'react-icons/im'
import { BsFillPeopleFill } from 'react-icons/bs'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { BsFillBasket3Fill} from 'react-icons/bs'
import { AiFillSmile } from 'react-icons/ai'
import Link from "next/link"

interface LayoutInterface {
    children: ReactNode
}

const FOOTER_ICONS = [
    {
        title: 'Menu',
        icon: ImMenu,
    },
    {
        title: 'Social',
        icon: BsFillPeopleFill,
    },
    {
        title: 'Add',
        icon: AiOutlinePlusSquare,
    },
    {
        title: 'Cart',
        icon: BsFillBasket3Fill,
    },
    {
        title: 'Profile',
        icon: AiFillSmile,
    },
]

export const Layout = ({ children }: LayoutInterface) => {
    return (
        <>
            <h1 className="text-black">QQ ISSO BAUAB????</h1>
            {children}
            
            <footer className="bg-red-700 flex pb-4 pt-4 w-full bottom-0 absolute">

                {FOOTER_ICONS.map((item) => (

                    <Link
                        className="hover:bg-white/10 transition duration-200 rounded-3xl flex flex-col items-center justify-center w-1/5"
                        key={item.title}
                        href={`/${item.title.toLowerCase()}`}
                    >
                        <div> <item.icon size={30} className=' fill-yellow-500' /> </div>

                        <div className="text-yellow-500"> {item.title} </div>
                    </Link>
                
                ))}

            </footer>
            
        </>
    )
}