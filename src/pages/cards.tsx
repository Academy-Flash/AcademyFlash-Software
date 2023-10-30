import { Card, CardContent, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface CardInterface {
    question: string
    answer: string
    rating: number
    difficulty: number
    id_deck: number
}

const CardsPage = () => {
    const router = useRouter();

    const deck_name = router.query.deck_name;

    const [cards, setCards] = useState<CardInterface[]>([]);

    useEffect(() => {
        async function getCards() {
            try {
                await fetch('/api/getCards', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({deck_name: deck_name}),
                }).then((response) => response.json())
                .then((data) => setCards(data));
            } catch (error) {
                console.error(error);
            }
        }
        getCards()
    }, [])

    const [flippedCards, setFlippedCards] = useState<number[]>([]);

    const handleCardClick = (index: number) => {
        if (flippedCards.includes(index)) {
            setFlippedCards(flippedCards.filter((i) => i !== index));
        } else {
            setFlippedCards([...flippedCards, index]);
        }
    };

    return (
        <div className='flex flex-col h-full w-full gap-3 p-10'>
            {cards.map((card, index) => (
                <Card 
                    key={index} 
                    onClick={() => handleCardClick(index)} 
                    sx={{ cursor: 'pointer', transform: flippedCards.includes(index) ? 'rotateY(180deg)' : 'none' }} 
                >
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {card.question}
                        </Typography>
                    </CardContent>
                    <CardContent sx={{ transform: 'rotateY(180deg)' }}>
                        <Typography color="textSecondary">
                            {card.answer}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};


export default CardsPage;
