import { BsCardText } from 'react-icons/bs'

export const RecentCards = () => {
    return (
        <section className="flex justify-center w-[70%] bg-pink-600 rounded-lg p-4 font-inter h-[116px] items-center flex-col">
            <p className="text-white">RECENT CARDS</p>
            <BsCardText size={70} className='fill-white' />
        </section>
    );
};
