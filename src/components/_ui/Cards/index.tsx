import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface CardInterface {
    question: string
    answer: string
    rating: number
    difficulty: number
    id_deck: number
}

interface CardsPageProps {
    showAnswer: boolean;
    cards : CardInterface[];
    index: number;
}


export const Cards = ({ showAnswer, cards, index}: CardsPageProps) => {


    return (
        
            <>  {/*TODO: - Buscar do banco os valores do usuário*/}          
                <section className="text-black flex items-center space-x-1">
                    <div className="font-bold">UNIFESP</div>
                    <div className="text-gray-500">@Duduzinho</div>
                    <div className="text-gray-500">* 01 Jan 2023</div>
                </section>
                <section className="text-black mt-5 text-base">
                    {cards.length > 0 ? cards[index].question : 'No cards found'}
                </section>

                {showAnswer && (<section className="text-black mt-5 text-base">
                    Answer: {cards[index].answer}
                </section>  )} 
            </>
    )
}
