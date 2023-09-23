import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { MdNavigateNext } from 'react-icons/md'
import FeedbackCards from '@/components/_ui/FeedbackCard'

export default function CardsPage() {
    return (

        <main className="bg-gray-300 h-full w-full">
            <div className='pt-20 flex justify-center items-center'>
                <div className="overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-[70%] h-[70%] items-center">
                    <section className="text-black flex items-center space-x-1">
                        <div className="font-bold">UNIFESP</div>
                        <div className="text-gray-500">@Duduzinho</div>
                        <div className="text-gray-500">* 01 Jan 2023</div>
                    </section>
                    <section className="text-black mt-5 text-base">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nulla doloribus nostrum, officiis laudantium quibusdam ex eveniet itaque perferendis suscipit quidem aperiam, numquam rerum! Omnis nesciunt totam repudiandae qui. Molestias.
                    </section>
                    
                    <FeedbackCards/>

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
