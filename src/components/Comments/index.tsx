import { AiFillCloseCircle } from 'react-icons/ai';
import { BiSolidCommentDetail } from 'react-icons/bi';
import FeedbackCards from '@/components/_ui/FeedbackCard';

interface CommentBoxProps {
    onToggle: () => void;
    style?: React.CSSProperties;
}

export default function CommentsPage({ onToggle, style }: CommentBoxProps) {
    return (
            <div className={`w-[78%] h-[90%] rounded-3xl bg-gray-500 ${style?.visibility ?? 'hidden'}`}>

                <div className='w-full items-start justify-start pt-3 pl-10' > 
                    <button className='cursor-pointer hover:bg-black/20 transition duration-200 rounded-full' onClick={onToggle}>
                    <AiFillCloseCircle 
                        size={50} 
                        className='' 
                        style={{
                        color: '#f2be5c',
                        }}
                    />
                    </button>
                </div>

                <div className='space-y-3'>

                    {Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className=' bg-gray-400 rounded-3xl flex-col justify-center items-center p-3 border-black border-2'>
                            <section className="text-black flex items-center justify-center space-x-1 space-y-5">
                                <div className="font-bold mt-5">UNIFESP</div>
                                <div className="text-white">@Duduzinho</div>
                                <div className="text-white">* 01 Jan 2023</div>
                            </section>
                            <section className="text-black mt-5 text-base">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nulla doloribus nostrum, officiis laudantium quibusdam ex eveniet itaque perferendis suscipit quidem aperiam, numquam rerum! Omnis nesciunt totam repudiandae qui. Molestias.
                            </section>
                        </div>
                    ))}
                </div>


            </div>
    )
}

