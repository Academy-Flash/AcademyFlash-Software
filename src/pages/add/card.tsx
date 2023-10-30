import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

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
    const [newDeckName, setNewDeckName] = useState('');
    const [newDeckCategory, setNewDeckCategory] = useState('');
    const [newDeckDescription, setNewDeckDescription] = useState('');
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
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const card = { front, back, deck: selectedDeck };
        await createCard(card);
        router.push('/');
    };

    const handleSubmitDeck = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const deck = { newDeckName, newDeckCategory, newDeckDescription };
        await createDeck(deck);
        router.reload();
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

    const createDeck = async (deck: { newDeckName:string, newDeckCategory: string, newDeckDescription: string }) => {
        try {
            await fetch('/api/create/deck', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(deck),
            });
        } catch (error) {
            console.error(error);
        }
    }

    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
    }

    const closePopup = () => {
        setShowPopup(false);
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
                <div>
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
                    <button type='button' onClick={openPopup}>+</button>
                </div>
                <button type="submit">Save</button>
            </form>
            {showPopup && (
                <div className='fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-50 flex justify-center items-center'>
                    <div className='bg-gray-600 p-4 rounded-md'>
                        <h2 className='text-lg font-bold mb-2'>Create a new deck</h2>
                        <form onSubmit={handleSubmitDeck}>
                            <div className='mb-2'>
                                <label htmlFor='deck_name' className='block'>Deck name:</label>
                                <input type='text' className='text-black' id='deck_name' value={newDeckName} onChange={(event) => setNewDeckName(event.target.value)} />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='category' className='block'>Category:</label>
                                <input type='text' className='text-black' id='category' value={newDeckCategory} onChange={(event) => setNewDeckCategory(event.target.value)} />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor='description' className='block'>Description:</label>
                                <textarea id='description' className='text-black' value={newDeckDescription} onChange={(event) => setNewDeckDescription(event.target.value)} />
                            </div>
                            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md'>Create</button>
                            <button type='button' className='bg-red-500 text-white px-4 py-2 rounded-md ml-2' onClick={closePopup}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddCardPage;