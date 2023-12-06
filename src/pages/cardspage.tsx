import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { MdNavigateNext } from 'react-icons/md'
import FeedbackCards from '@/components/_ui/FeedbackCard'
import { Cards } from '@/components/_ui/Cards'
import { BiSolidCommentDetail } from 'react-icons/bi'
import { useState } from 'react';
import Link from "next/link"
import CommentsPage from '@/components/_ui/Comments'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { PiCards } from 'react-icons/pi';


interface CardInterface {
    id:any
    question: string
    answer: string
    rating: number
    difficulty: number
    id_deck: number
}


export default function CardsPage() {
    const router = useRouter(); // Use router to get the deck_name from the url
    const [index, setIndex] = useState(0); // Use useState for index of the actual card
    const [commentBox, setCommentBox] = useState(false); // Use useState for profile box
    const [answer, setAnswer] = useState(false); // Use useState for Answer
    const [darkMode, setDarkMode] = useState(false); // Use useState for dark mode
    const [cards, setCards] = useState<CardInterface[]>([]); // Use useState for all the cards from de decks

    const deck_name = router.query.deck_name;

    function nextIndex() {
        if (index < cards.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function toggleCommentBox() {
        setCommentBox(prevCommentBox => !prevCommentBox);
    }

    function toggleAnswer() {
      setAnswer(prevAnswer => !prevAnswer);
    }

    function toggleNext() {
        if (answer){
            toggleAnswer();
        }
        nextIndex();
    }

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    async function getCards() {
        try {
            const response = await fetch('/api/getCards', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({deck_name: deck_name}),
            });
            const data = await response.json();
            setCards(data);
        } catch (error) {
            console.error(error);
        }
    }
    /* 
        This useEffect hook is executing the getCards function when the component mounts and whenever 
        the router or deck_name dependencies change. The getCards function makes a POST request to the 
        /api/getCards endpoint with a JSON payload containing the deck_name property. If the request is 
        successful, the response data is set to the cards state using the setCards function. 
    */
    useEffect(() => {
        getCards()
    }, [deck_name])


    return (

        <main className="h-full w-full flex-col items-center justify-center">
            
            {commentBox && (<div className='w-full h-full top-0 left-0 opacity-50 fixed bg-black z-20'></div>)}
    
            {commentBox && (
                    <div className='h-[60%] w-[60%] flex justify-center fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <CommentsPage onToggle={toggleCommentBox} style={{ visibility: commentBox ? 'visible' : 'hidden' }}/>
                    </div>
                
            )} 
            
            <div className='pt-20 flex justify-center items-center'>
                <div className="overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-[70%] h-fit items-center">
                    <Cards showAnswer={answer} index={index} cards={cards}/>
                </div>
            </div>
            
            <div className='flex justify-center items-center space-x-2'>
                <div className='bg-[#D9D9D9] mt-5 w-fit h-fit rounded-full shadow-lg shadow-black/60 border-black border-2'>
                    <FeedbackCards index={index} cards={cards} />
                </div>
                <button onClick={toggleCommentBox} className='mt-5 bg-[#D9D9D9] rounded-full hover:bg-white/30 p-2 cursor-pointer transition duration-200 border-black border-2' >
                    <BiSolidCommentDetail className='fill-black' size={20} />
                </button>
            </div>


            <div className='relative mt-10 flex space-x-24 justify-center items-center'>

                <button onClick={toggleAnswer} className="overflow-hidden bg-[#D9D9D9] border-black border-2 hover:bg-gray-600 text-white font-semibold rounded-full w-16 h-16 flex justify-center items-center relative transition duration-300 ease-out shadow-md group">
                    < AiOutlineQuestionCircle size={40} className="fill-black"/>
                    <span className="absolute rounded-full inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-300 group-hover:translate-x-0 ease">
                        <h1 className='text-black font-bold'>Answer</h1>
                    </span>
                </button>


                <button onClick={toggleNext} className="overflow-hidden bg-[#D9D9D9] hover:bg-gray-600 border-black border-2 text-white font-semibold rounded-full w-16 h-16 flex justify-center items-center relative transition duration-300 ease-out shadow-md group">
                    
                    < MdNavigateNext size={50} className="fill-black"/>
                    <span className="absolute rounded-full inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-300 group-hover:translate-x-0 ease">
                        <h1 className='text-black font-bold'>Next</h1>
                    </span>
                </button>

                <Link 
                    className="overflow-hidden bg-[#D9D9D9] hover:bg-gray-600 border-black border-2 text-white font-semibold rounded-full w-16 h-16 flex justify-center items-center relative transition duration-300 ease-out shadow-md group"
                    href={`/cards?deck_name=${deck_name}`}
                >
                    
                    < PiCards size={50} className="fill-black"/>
                    <span className="absolute rounded-full inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-300 group-hover:translate-x-0 ease">
                        <h1 className='text-black font-bold'>All</h1>
                    </span>
                </Link>

            </div>

        </main>

    )
}