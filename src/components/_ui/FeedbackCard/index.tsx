// TODO: Adicionar uma coluna de id de usuário na tabela de cards

import { BiSolidShareAlt } from 'react-icons/bi'
import { BiSave } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';

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
    const [value, setValue] = useState<number | null>(0);

    useEffect(() => {
      setValue(cards[index]?.rating || 0);
    }, [index, cards])


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


    return (
        <>
        
            <div className="text-black flex items-center px-5 space-x-10 w-full">
                <div className='rounded-full hover:bg-black/50 p-2 cursor-pointer transition duration-200'><BiSave size={20}/> </div>
                <div className='rounded-full hover:bg-black/50 p-2 cursor-pointer transition duration-200'><BiSolidShareAlt size={20}/> </div>
               
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        handleRatingVote(cards[index], newValue);
                    }}
                />                

            </div>
        
        </>
    )
}