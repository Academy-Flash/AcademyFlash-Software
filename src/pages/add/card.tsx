import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Popup from '@/components/_ui/Popup';
import { useCurrentCommunity } from "@/context/CurrentCommunityContext";

const AddCardPage = () => {
    const {communityDecks } = useCurrentCommunity();
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    const [selectedDeck, setSelectedDeck] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!front || !back || !selectedDeck) {
            setError('Please fill in all fields');
            return;
        }
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
            })
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex flex-col h-full w-full justify-center items-center gap-6">
            <h1 className="text-3xl font-bold mb-4">Add Card</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-md p-6 rounded-md shadow-md" style={{backgroundColor : '#575369'}}>
                <div className="mb-4">
                    <label htmlFor="front" className="text-white">Question:</label>
                    <input
                        type="text"
                        id="front"
                        value={front}
                        onChange={(event) => setFront(event.target.value)}
                        className="w-full px-3 py-2 border text-black border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="back" className="text-white">Answer:</label>
                    <input
                        type="text"
                        id="back"
                        value={back}
                        onChange={(event) => setBack(event.target.value)}
                        className="w-full px-3 py-2 border text-black border-gray-300 rounded-md "
                    />
                </div>
                <div className="flex items-center gap-3">
                    <label htmlFor="deck" className="text-white">Deck:</label>
                    <select
                        id="deck"
                        value={selectedDeck}
                        onChange={(event) => setSelectedDeck(event.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                    >
                        <option value="">Select a deck</option>
                        {communityDecks.map((deck) => (
                            <option key={deck.id} value={deck.id}>
                                {deck.deck_name}
                            </option>
                        ))}
                    </select>
                </div>

                {error && <p className="pt-5 flex justify-center text-purple-300">{error}</p>}

                <button type="submit" className="w-full bg-violet-950 text-white py-2 px-4 rounded-md hover:bg-violet-950/70 mt-4">
                    Create Card
                </button>
            </form>
            <Popup />
        </div>

    );
};

export default AddCardPage;