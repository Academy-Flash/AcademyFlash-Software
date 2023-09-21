import { AiFillFire } from 'react-icons/ai'

export const DaysStrike = () => {
    return (
        <section className="bg-purple-600 flex items-center w-[30%] rounded-lg p-4 font-inter h-[115px] flex-col">
            <p>DAYS STRIKE</p>
            <div className="flex items-center space-x-2"> 
                <p style={{ fontSize: '48px' }}>45</p>
                <AiFillFire size={30} className='fill-red-700' />
            </div>
        </section>
    );
};
