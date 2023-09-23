import { FaRegComment } from 'react-icons/fa'
import { BiLike, BiSolidShareAlt } from 'react-icons/bi'
import { AiOutlinePullRequest } from 'react-icons/ai'

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
                    <section className="text-black mt-6 flex items-center justify-evenly w-full">
                        <div className='rounded-full hover:bg-black/50 p-2 cursor-pointer transition duration-200'> <FaRegComment /> </div>
                        <div className='rounded-full hover:bg-black/50 p-2 cursor-pointer transition duration-200'> <BiLike /> </div>
                        <div className='rounded-full hover:bg-black/50 p-2 cursor-pointer transition duration-200'> <BiSolidShareAlt /> </div>
                        <div className='rounded-full hover:bg-black/50 p-2 cursor-pointer transition duration-200'> <AiOutlinePullRequest/> </div>
                    </section>

                </div>
            </div>
            <div className='mt-10 flex space-x-24 justify-center items-center'>
                <button className="bg-gray-500 border-black border-2 hover:bg-gray-600 text-white font-semibold rounded-full w-16 h-16 ">
                    Answer
                </button>
                <button className="bg-gray-500 hover:bg-gray-600 border-black border-2 text-white font-semibold rounded-full w-16 h-16 ">
                    Next
                </button>
            </div>
        </main>
    )
}