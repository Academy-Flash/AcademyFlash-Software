//react icons
import { ImMenu } from 'react-icons/im'
import { BsFillPeopleFill } from 'react-icons/bs'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { BsFillBasket3Fill} from 'react-icons/bs'
import { AiFillSmile } from 'react-icons/ai'
import Link from "next/link"

const FOOTER_ICONS = [
    {
        title: 'Menu',
        icon: ImMenu,
    },
    {
        title: 'Community',
        icon: BsFillPeopleFill,
    },
    {
        title: 'Add',
        icon: AiOutlinePlusSquare,
    },
    {
        title: 'Folder',
        icon: BsFillBasket3Fill,
    },
    {
        title: 'Profile',
        icon: AiFillSmile,
    },
]


export const Footer = () => {
    return (
        <footer className="bg-red-700 flex p-2 w-[80%] h-16 fixed bottom-0 left-[10%]">

            {FOOTER_ICONS.map((item) => (

                 <Link
                     className="hover:bg-white/10 transition duration-200 rounded-3xl flex flex-col items-center justify-center w-1/5"
                     key={item.title}
                     href={`/${item.title.toLowerCase()}`}
                 >
                     <div> <item.icon size={25} className=' fill-yellow-500' /> </div>

                     <div className="text-yellow-500"> {item.title} </div>
                 </Link>
            
             ))}

         </footer>
    )
}