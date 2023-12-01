
import { Button, Card, CardContent, Typography, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import { MdEdit } from 'react-icons/md';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface CardInterface {
    id: any;
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
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [currentCard, setCurrentCard] = useState<CardInterface | null>(null);

    useEffect(() => {
        async function getCards() {
            try {
                const response = await fetch('/api/getCards', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ deck_name: deck_name }),
                });
    
                if (response.ok) {
                    const data = await response.json();
                    // Certifique-se de que data é uma array antes de definir o estado
                    if (Array.isArray(data)) {
                        setCards(data);
                    } else {
                        console.error('Os dados recebidos não são uma array');
                    }
                } else {
                    console.error('Falha ao buscar os cards');
                }
            } catch (error) {
                console.error('Erro ao buscar os cards:', error);
            }
        }
        getCards();
    }, [deck_name]);

    const handleEditClick = (card: CardInterface) => {
        setCurrentCard(card);
        setEditModalOpen(true);
    }

    const handleClose = () => {
        setEditModalOpen(false);
        setCurrentCard(null);
    }
    const handleSave = async () => {
        try {
            const response = await fetch('/api/edit/card', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(currentCard),
            });

            if (response.ok) {
                const updatedCard = await response.json();
                setCards(cards.map(card => card.id === updatedCard.id ? updatedCard : card));
            } else {
                console.error('Falha ao atualizar o card');
            }
        } catch (error) {
            console.error('Erro ao atualizar o card:', error);
        } finally {
            handleClose();
        }
    };

    return (
        <div className="flex flex-wrap justify-center overflow-y-auto h-[95%]">
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
                                startIcon={<MdEdit />}
                                size="small"
                                onClick={() => handleEditClick(card)}
                            >
                                Editar
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
            

            <Dialog open={editModalOpen} onClose={handleClose}>
                <DialogTitle>Edit Card</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="question"
                        label="Question"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={currentCard?.question || ''}
                        onChange={(e) => setCurrentCard(currentCard ? { ...currentCard, question: e.target.value } : null)}


                    />
                    <TextField
                        margin="dense"
                        id="answer"
                        label="Answer"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={currentCard?.answer || ''}
                        onChange={(e) => setCurrentCard(currentCard ? { ...currentCard, answer: e.target.value } : null)}

                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>

            
        </div>
    );
}

export default CardsPage;
