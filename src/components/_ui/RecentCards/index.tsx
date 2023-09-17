import Link from 'next/link'
import { BsCardText } from 'react-icons/bs'

export const RecentCards = () => {
    return (
        <section className="flex items-center space-x-2">
            <div className="pink rounded-lg p-4 font-inter">
                    <div className="flex items-center space-x-2">
                            <div className="text-white text-2xl">RECENT CARDS
                                <div className="flex items-center space-x-2">
                                        <BsCardText size={100} className='fill-white' />
                                </div>
                            </div>
                    </div>
            </div>
        </section>
    );
};
