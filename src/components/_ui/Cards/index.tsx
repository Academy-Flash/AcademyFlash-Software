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
}

export const Cards = ({ showAnswer }: CardsPageProps) => {

    const router = useRouter();

    const deck_name = router.query.deck_name;

    const [cards, setCards] = useState<CardInterface[]>([]);

    useEffect(() => {
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
        getCards()
    }, [deck_name])
    
    const randomIndex = Math.floor(Math.random() * cards.length);

    return (
        
            <>  {/*TODO: - Buscar do banco os valores do usuário*/}          
                <section className="text-black flex items-center space-x-1">
                    <div className="font-bold">UNIFESP</div>
                    <div className="text-gray-500">@Duduzinho</div>
                    <div className="text-gray-500">* 01 Jan 2023</div>
                </section>
                <section className="text-black mt-5 text-base">
                    {cards.length > 0 ? cards[randomIndex].question : 'No cards found'}
                </section>

                {showAnswer && (<section className="text-black mt-5 text-base">
                    Answer: {cards[randomIndex].answer}
                </section>  )} 
            </>
    )
}
