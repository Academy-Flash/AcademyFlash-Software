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


        <section className="flex bg-neutral-500 w-full font-bold p-2 rounded-md flex-col gap-3">
            
            {FOOTER_ICONS.map((item) => (

            <Link
                className="hover:bg-white/10 transition duration-200 rounded-3xl w-full flex items-center justify-left gap-2 p-1"
                key={item.title}
                href={`/${item.title.toLowerCase()}`}
            >
                <item.icon size={30} className='fill-green-300' /> 
                {item.title}
            </Link>

            ))}           

        </section>
    )
}