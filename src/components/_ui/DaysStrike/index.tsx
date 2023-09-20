import Link from 'next/link'
import { AiFillFire } from 'react-icons/ai'


export const DaysStrike = () => {
    return (
        <section className="flex items-center space-x-2 ">
            <div className="bg-purple-600 rounded-lg p-4 font-inter w-[110px] h-[115px]" style={{ fontSize: '12px' }}> DAYS STRIKE
                <div className="flex items-center space-x-2"> 
                    <div className="text-white  flex items-center space-x-1"> 
                        <div style={{ fontSize: '48px' }}>45</div>
                        <div>
                            <AiFillFire size={30} className='fill-red-700' />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};
