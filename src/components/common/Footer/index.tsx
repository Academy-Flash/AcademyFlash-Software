//react icons
import { PiHouseSimpleFill } from 'react-icons/pi'
import { BsFillPeopleFill } from 'react-icons/bs'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { VscFileSymlinkDirectory} from 'react-icons/vsc'
import { AiFillSmile } from 'react-icons/ai'
import Link from "next/link"
import { useRouter } from 'next/router'


const FOOTER_ICONS = [
    {
        title: 'Menu',
        icon: PiHouseSimpleFill,
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
        icon: VscFileSymlinkDirectory,
    },
    {
        title: 'Profile',
        icon: AiFillSmile,
    },
]

// Function for choosing the page to be displayed after clicking on the footer icon
function handleFooterClick(FOOTER_ICONS: any) {
    if(FOOTER_ICONS.title.toLowerCase() === 'menu') {
        return '/'
    }
    else {
        return `/${FOOTER_ICONS.title.toLowerCase()}`
    }
}

interface FooterProps {
    onToggleProfile: () => void;
}

export const Footer = ({ onToggleProfile }: FooterProps) => {
    return (
        <footer className="bg-red-700 flex p-2 w-[80%] h-16 fixed bottom-0 left-[10%]">

            {FOOTER_ICONS.map((item) => (
                item.title.toLowerCase() === 'profile' ? (
                    <button
                        className="hover:bg-white/10 transition duration-200 rounded-3xl flex flex-col items-center justify-center w-1/5"
                        key={item.title}
                        onClick={onToggleProfile}
                    >
                        <div> <item.icon size={25} className=' fill-yellow-500 border-black ' /> </div>
                        <div className="text-yellow-500"> {item.title} </div>
                    </button>
                ) : (
                    <Link
                        className="hover:bg-white/10 transition duration-200 rounded-3xl flex flex-col items-center justify-center w-1/5"
                        key={item.title}
                        href={`${handleFooterClick(item)}`}
                    >
                        <div> <item.icon size={25} className=' fill-yellow-500 border-black ' /> </div>
                        <div className="text-yellow-500"> {item.title} </div>
                    </Link>
                )
             ))}

         </footer>
    )
}