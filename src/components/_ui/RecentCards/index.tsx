import Link from 'next/link'
import { BsCardText } from 'react-icons/bs'

export const RecentCards = () => {
    return (
        <section className="flex justify-center">
            <div className="bg-pink-600 rounded-lg p-4 font-inter  w-[192px] h-[117px]  items-center">
                <div className="flex items-center space-x-2">
                    <div className="text-white text mx-auto">RECENT CARDS
                        <div className="flex justify-center">
                            <BsCardText size={70} className='fill-white' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
