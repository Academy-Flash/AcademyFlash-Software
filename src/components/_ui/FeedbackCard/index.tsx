import { BiLike, BiDislike, BiSolidShareAlt } from 'react-icons/bi'
import { BiSave } from 'react-icons/bi'


export default function FeedbackCards() {
    return (
        <>
        
            <div className="text-black flex items-center px-5 space-x-10 w-full">
                <div className='rounded-full hover:bg-black/50 p-2 cursor-pointer transition duration-200'><BiSave size={20}/> </div>
                <div className='rounded-full hover:bg-black/50 p-2 cursor-pointer transition duration-200'><BiSolidShareAlt size={20}/> </div>
                <div className='rounded-full hover:bg-black/50 p-2 cursor-pointer transition duration-200'> <BiLike className='fill-green-700' size={20} />  </div>
                <div className='rounded-full hover:bg-black/50 p-2 cursor-pointer transition duration-200'><BiDislike className='fill-red-700' size={20} />  </div>
            </div>
        
        </>
    )
}