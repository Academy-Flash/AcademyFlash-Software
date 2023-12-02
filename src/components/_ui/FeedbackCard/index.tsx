// TODO: Adicionar uma coluna de id de usuário na tabela de cards

import { BiLike, BiDislike, BiSolidShareAlt } from 'react-icons/bi'
import { BiSave } from 'react-icons/bi'
import { useState } from 'react'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { MdNavigateNext } from 'react-icons/md'


interface CardInterface {
    id: any;
    question: string
    answer: string
    rating: number
    difficulty: number
    id_deck: number
}

interface CardsPageProps {
    cards : CardInterface[];
    index: number;
}


export default function FeedbackCards( {cards, index}: CardsPageProps) {
    const [likeCount, setLikeCount] = useState(50);
    const [dislikeCount, setDislikeCount] = useState(25);
    const [activeBtn, setActiveBtn] = useState("none");
    const [value, setValue] = useState<number | null>(2);


    const handleRatingVote = async (card: CardInterface, newValue: number | null) => {
        const updatedCard = { ...cards[index], rating: newValue };

        try {

            const response = await fetch('/api/edit/card', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedCard),
            });
            
            if (response.ok) {
                const updatedCardFromServer = await response.json();
                // Substitui o card atualizado no lugar do card antigo
                cards[index] = updatedCardFromServer;
                
            } else {
                console.error('Falha ao atualizar o card');
            }
        } catch (error) {
            console.error('Erro ao atualizar o card:', error);
        } 
    };

    const handleDisikeClick = () => {
        if (activeBtn === "none") {
          setDislikeCount(dislikeCount + 1);
          setActiveBtn("dislike");
          return;
        }
       
        if (activeBtn === 'dislike'){
          setDislikeCount(dislikeCount - 1);
          setActiveBtn("none");
          return;
        }
     
        if (activeBtn === "like") {
          setDislikeCount(dislikeCount + 1);
          setLikeCount(likeCount - 1);
          setActiveBtn("dislike");
        }
      };

      const handleLikeClick = () => {
        if (activeBtn === "none") {
          setLikeCount(likeCount + 1);
          setActiveBtn("like");
          return;
        }
     
        if (activeBtn === 'like'){
          setLikeCount(likeCount - 1);
          setActiveBtn("none");
        //   console.log(typeof(cards[index].rating))
          return;
        }
     
        if (activeBtn === "dislike") {
          setLikeCount(likeCount + 1);
          setDislikeCount(dislikeCount - 1);
          setActiveBtn("like");
        }
      };


    return (
        <>
        
            <div className="text-black flex items-center px-5 space-x-10 w-full">
                <div className='rounded-full hover:bg-black/50 p-2 cursor-pointer transition duration-200'><BiSave size={20}/> </div>
                <div className='rounded-full hover:bg-black/50 p-2 cursor-pointer transition duration-200'><BiSolidShareAlt size={20}/> </div>
                <button onClick={handleLikeClick} className={`btn ${activeBtn === "like" ? "like-active" : ""} flex rounded-full hover:bg-black/50 p-2 cursor-pointer transition duration-200`}> <BiLike className='fill-green-700' size={20} /> <div className='ml-2'>{likeCount}</div> </button>
                <button onClick={handleDisikeClick} className={`btn ${activeBtn === "like" ? "like-active" : ""} flex rounded-full hover:bg-black/50 p-2 cursor-pointer transition duration-200`}><BiDislike className='fill-red-700' size={20} /> <div className='ml-2'>{dislikeCount}</div>  </button>
               
                <Rating
                    name="simple-controlled"
                    value={cards[index]?.rating || 0}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        handleRatingVote(cards[index], newValue);
                    }}
                />                

            </div>
        
        </>
    )
}