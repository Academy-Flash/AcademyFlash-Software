import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { MdNavigateNext } from 'react-icons/md'
import FeedbackCards from '@/components/_ui/FeedbackCard'
import { Cards } from '@/components/_ui/Cards'

export default function CardsPage() {
    return (

        <main className="bg-gray-300 h-full w-full">
            <div className='pt-20 flex justify-center items-center'>
                <div className="overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-[70%] h-[70%] items-center">
                    <Cards />
                </div>
            </div>
            <div className='relative mt-10 flex space-x-24 justify-center items-center'>

                <button className="overflow-hidden bg-gray-400 border-black border-2 hover:bg-gray-600 text-white font-semibold rounded-full w-16 h-16 flex justify-center items-center relative transition duration-300 ease-out shadow-md group">
                    < AiOutlineQuestionCircle size={40} className="fill-black"/>
                    <span className="absolute rounded-full inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-600 group-hover:translate-x-0 ease">
                        <h1 className='text-black font-bold'>Answer</h1>
                    </span>
                </button>


                <button className="overflow-hidden bg-gray-400 hover:bg-gray-600 border-black border-2 text-white font-semibold rounded-full w-16 h-16 flex justify-center items-center relative transition duration-300 ease-out shadow-md group">
                    
                    < MdNavigateNext size={50} className="fill-black"/>
                    <span className="absolute rounded-full inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-600 group-hover:translate-x-0 ease">
                        <h1 className='text-black font-bold'>Next</h1>
                    </span>
                </button>
            </div>
        </main>
    )
}
