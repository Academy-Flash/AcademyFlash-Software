import { PiHouseSimpleFill } from 'react-icons/pi'
import { BsFillPeopleFill } from 'react-icons/bs'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { VscFileSymlinkDirectory } from 'react-icons/vsc'
import { AiFillSmile } from 'react-icons/ai'
import { useRouter } from 'next/router';
import { useState } from 'react'

interface Icons {
    title: string,
    icon: any
}

const actions = [
    {
        title: 'Back',
        icon: RiArrowGoBackFill,
    },
    {
        title: 'Community',
        icon: AiOutlinePlusSquare,
    }, 
    {
        title: 'Card',
        icon: AiOutlinePlusSquare,
    },
    {
        title: 'Deck',
        icon: AiOutlinePlusSquare,
    },
]

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

export const Footer = () => {

    const [showAddMenu, setShowAddMenu] = useState(false);
    const router = useRouter();

    function handleFooterClick(item: Icons) {
        if (item.title === "Add") {
            setShowAddMenu(true);
            return;
        }

        switch (item.title) {
            case "Menu":
                router.push("/");
                break;
            default:
                router.push("/" + item.title.toLowerCase());
                break;
        }
    }

    const handleAddAction = (item: Icons) => {
        if (item.title === "Back") {
            setShowAddMenu(false);
            return;
        }
        
        setShowAddMenu(false)
        router.push("/add/" + item.title.toLowerCase());
    }

    return (
        <footer className="flex p-2 w-[80%] h-16 fixed bottom-0 left-[10%]" style={{backgroundColor : '#1F1640'}}>

            {showAddMenu ?
                (
                    <div className='flex justify-around w-full'>
                        {actions.map((item) => (
                            <button
                                className='hover:bg-white/10 transition duration-200 rounded-3xl'
                                key={item.title}
                                onClick={() => handleAddAction(item)}
                            >
                                <div><item.icon size={25} className=' fill-yellow-500 border-black ' /> </div>
                                <div className="text-yellow-500"> {item.title} </div>
                            </button>
                        ))}
                    </div>
                )

                :

                (FOOTER_ICONS.map((item) => (

                    <button
                        className='hover:bg-white/10 transition duration-200 rounded-3xl flex flex-col items-center justify-center w-1/5'
                        key={item.title}
                        onClick={() => handleFooterClick(item)}
                    >
                        <div><item.icon size={25} className=' fill-yellow-500 border-black ' /> </div>
                        <div className="text-yellow-500"> {item.title} </div>
                    </button>

                )))
            }

        </footer>
    )
}