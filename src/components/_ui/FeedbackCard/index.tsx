import { FaRegComment } from 'react-icons/fa'
import { BiLike, BiSolidShareAlt } from 'react-icons/bi'
import { AiOutlinePullRequest } from 'react-icons/ai'


export default function FeedbackCards() {
    return (
        <section className="text-black mt-6 flex items-center justify-evenly w-full">
            <div className='rounded-full hover:bg-black/50 p-2 cursor-pointer transition duration-200'> <FaRegComment /> </div>
            <div className='rounded-full hover:bg-black/50 p-2 cursor-pointer transition duration-200'> <BiLike /> </div>
            <div className='rounded-full hover:bg-black/50 p-2 cursor-pointer transition duration-200'> <BiSolidShareAlt /> </div>
            <div className='rounded-full hover:bg-black/50 p-2 cursor-pointer transition duration-200'> <AiOutlinePullRequest/> </div>
        </section>
    )
}