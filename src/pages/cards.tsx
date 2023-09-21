import { FaRegComment } from 'react-icons/fa'
import { BiLike, BiSolidShareAlt } from 'react-icons/bi'
import { AiOutlinePullRequest } from 'react-icons/ai'

export default function CardsPage() {
    return (

        <main className="bg-gray-300 h-screen w-screen">
            <div className='pt-20 flex justify-center items-center'>
                <div className="overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-1/2 h-1/2 items-center">
                    <div className="text-black flex items-center space-x-1">
                        <div className="font-bold">UNIFESP</div>
                        <div>@Duduzinho</div>
                        <div>* 01 Jan 2023</div>
                    </div>
                    <div className="text-black mt-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nulla doloribus nostrum, officiis laudantium quibusdam ex eveniet itaque perferendis suscipit quidem aperiam, numquam rerum! Omnis nesciunt totam repudiandae qui. Molestias.
                    </div>
                    <div className="text-black mt-6 flex items-center space-x-6 w-full">
                        <div> <FaRegComment /> </div>
                        <div> <BiLike /> </div>
                        <div> <BiSolidShareAlt /> </div>
                        <div> <AiOutlinePullRequest/> </div>
                    </div>

                </div>
            </div>
            <div className='mt-20 flex space-x-24 justify-center items-center'>
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