import { ImMenu } from 'react-icons/im'
import { BsFillPeopleFill } from 'react-icons/bs'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { BsFillBasket3Fill} from 'react-icons/bs'
import { AiFillSmile } from 'react-icons/ai'
import { VscCircleLargeFilled } from 'react-icons/vsc'
import Link from "next/link"


const FOOTER_ICONS = [
    {
        title: 'Computer Network',
        icon: VscCircleLargeFilled,
        color: 'red',
    },
    {
        title: 'Software Eng ',
        icon: VscCircleLargeFilled,
    },
    {
        title: 'Compilers',
        icon: VscCircleLargeFilled,
    },
    {
        title: 'Database',
        icon: VscCircleLargeFilled,
    },
    {
        title: 'Graphics Comp',
        icon: VscCircleLargeFilled,
    },
]


export const RecentFolders = () => {
    return (


        <section className="justify-center items-center space-x-2 bg-neutral-500 w-full mt-5 font-bold p-2 rounded-md">
            
            {FOOTER_ICONS.map((item) => (

            <Link
                className="hover:bg-white/10 transition duration-200 rounded-3xl items-center justify-center w-1/5"
                key={item.title}
                href={`/${item.title.toLowerCase()}`}
            >
                <div className='flex space-x-5'> <item.icon size={30} className='fill-green-300' /> 
                
                    <div className='relative'> 
                        {item.title} 
                    </div>
                
                </div>

            </Link>

            ))}           

        </section>
    )
}