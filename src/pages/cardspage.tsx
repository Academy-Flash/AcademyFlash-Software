import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { MdNavigateNext } from 'react-icons/md'
import FeedbackCards from '@/components/_ui/FeedbackCard'
import { Cards } from '@/components/_ui/Cards'
import { BiSolidCommentDetail } from 'react-icons/bi'
import { useState } from 'react';
import ProfileBox from "@/components/_ui/ProfileBox";
import CommentsPage from '@/components/_ui/Comments'
import { motion, AnimatePresence } from "framer-motion"


export default function CardsPage() {

    const [commentBox, setCommentBox] = useState(false); // Use useState for profile box

    function toggleCommentBox() {
        setCommentBox(prevCommentBox => !prevCommentBox);
    }

    const [answer, setAnswer] = useState(false); // Use useState for Answer

    function toggleConfig() {
      setAnswer(prevAnswer => !prevAnswer);
    }

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }


    return (

        <main className="bg-gray-400 h-full w-full flex-col items-center justify-center">
            
            <AnimatePresence initial={false}>
                {commentBox ? (
                <motion.div
                    className="w-fit h-fit flex justify-center items-center absolute z-20 bg-black/50"
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: '0%' }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    style={{
                    position: 'absolute',
                    }}
                >
                    {/* Caixa de perfil */}
                    <CommentsPage onToggle={toggleCommentBox} style={{ visibility: commentBox ? 'visible' : 'hidden' }} />

                </motion.div>
                ) : null}
            </AnimatePresence>
            
            <button
                className={`overflow-hidden bg-[#D9D9D9] border-${darkMode ? 'white' : 'black'} border-2 hover:bg-gray-600 text-${darkMode ? 'white' : 'black'} font-semibold rounded-full w-16 h-16 flex justify-center items-center relative transition duration-300 ease-out shadow-md group`}
                onClick={toggleDarkMode}
            >
                <AiOutlineQuestionCircle size={40} className={`fill-${darkMode ? 'white' : 'black'}`} />
                <span className={`absolute rounded-full inset-0 flex items-center justify-center w-full h-full text-${darkMode ? 'white' : 'black'} duration-300 -translate-x-full bg-gray-300 group-hover:translate-x-0 ease`}>
                    <h1 className={`text-${darkMode ? 'black' : 'white'} font-bold`}>Toggle</h1>
                </span>
            </button>


            <div className='pt-20 flex justify-center items-center'>
                <div className="overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-[70%] h-fit items-center">
                    <Cards showAnswer={answer}/>
                </div>
            </div>
            
            <div className='flex justify-center items-center space-x-2'>
                <div className='bg-[#D9D9D9] mt-5 w-fit h-fit rounded-full shadow-lg shadow-black/60 border-black border-2'>
                    <FeedbackCards />
                </div>
                <button onClick={toggleCommentBox} className='mt-5 bg-[#D9D9D9] rounded-full hover:bg-white/30 p-2 cursor-pointer transition duration-200 border-black border-2' >
                    <BiSolidCommentDetail className='fill-black' size={20} />
                </button>
            </div>


            <div className='relative mt-10 flex space-x-24 justify-center items-center'>

                <button onClick={toggleConfig} className="overflow-hidden bg-[#D9D9D9] border-black border-2 hover:bg-gray-600 text-white font-semibold rounded-full w-16 h-16 flex justify-center items-center relative transition duration-300 ease-out shadow-md group">
                    < AiOutlineQuestionCircle size={40} className="fill-black"/>
                    <span className="absolute rounded-full inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-300 group-hover:translate-x-0 ease">
                        <h1 className='text-black font-bold'>Answer</h1>
                    </span>
                </button>


                <button className="overflow-hidden bg-[#D9D9D9] hover:bg-gray-600 border-black border-2 text-white font-semibold rounded-full w-16 h-16 flex justify-center items-center relative transition duration-300 ease-out shadow-md group">
                    
                    < MdNavigateNext size={50} className="fill-black"/>
                    <span className="absolute rounded-full inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-300 group-hover:translate-x-0 ease">
                        <h1 className='text-black font-bold'>Next</h1>
                    </span>
                </button>

            </div>



        
        </main>

    )
}