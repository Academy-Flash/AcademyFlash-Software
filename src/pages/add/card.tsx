import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Popup from '@/components/_ui/Popup';

interface Deck {
    id: number;
    deck_name: string;
    rating: number;
    category: string;
    description: string;
}

const AddCardPage = () => {
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    const [decks, setDecks] = useState<Deck[]>([]);
    const [selectedDeck, setSelectedDeck] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    
    const router = useRouter();

    useEffect(() => {
        const fetchDecks = async () => {
            try {
                const response = await fetch('/api/getDecks');
                const data = await response.json();
                setDecks(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchDecks();
    }, [isPopupOpen]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const card = { front, back, deck: selectedDeck };
        await createCard(card);
        router.push('/');
    };

    const createCard = async (card: { front: string; back: string; deck: string }) => {
        try {
            await fetch('/api/create/card', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(card),
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='flex flex-col h-full w-full justify-center items-center gap-3'>
            <h1>Add Card</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                <div>
                    <label htmlFor="front">Front: </label>
                    <input
                        type="text"
                        id="front"
                        value={front}
                        className='text-black'
                        onChange={(event) => setFront(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="back">Back: </label>
                    <input
                        type="text"
                        id="back"
                        value={back}
                        className='text-black'
                        onChange={(event) => setBack(event.target.value)}
                    />
                </div>
                <div className='flex gap-3'>
                    <label htmlFor="deck">Deck: </label>
                    <select
                        id="deck"
                        value={selectedDeck}
                        onChange={(event) => setSelectedDeck(event.target.value)}
                        className='text-black'
                    >
                        <option value="">Select a deck</option>
                        {decks.map((deck) => (
                            <option key={deck.id} value={deck.id}>
                                {deck.deck_name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Save</button>
            </form>
            <Popup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
        </div>
    );
};

export default AddCardPage;