
import { Button, Card, CardContent, Typography } from '@mui/material';
import { AiFillEdit } from 'react-icons/ai';
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
    }, [cards])

    const handleEdit = (cardId: number) => {
        // Implement the edit logic here
        console.log('Edit card with id:', cardId);
    }

    return (
        <div>
            {cards.map((card, index) => (
                <Card key={index} sx={{ minWidth: 275, boxShadow: 3, '&:hover': { boxShadow: 6 }, borderRadius: 2, mb: 2 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {card.question}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {card.answer}
                        </Typography>
                        <Button
                            startIcon={<AiFillEdit />}
                            size="small"
                            onClick={() => handleEdit(card.id_deck)}
                        >
                            Editar
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default CardsPage;
