import React, { useState } from "react";
import { useCurrentCommunity } from "@/context/CurrentCommunityContext";

const Popup = () => {
    const {getDecks} = useCurrentCommunity();
    const [isOpen, setIsOpen] = useState(false);
    const [newDeckName, setNewDeckName] = useState('');
    const [newDeckCategory, setNewDeckCategory] = useState('');
    const [newDeckDescription, setNewDeckDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmitDeck = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!newDeckName || !newDeckCategory || !newDeckDescription) {
            setError('Please fill in all fields');
            return;
        }
        const deck = { newDeckName, newDeckCategory, newDeckDescription };
        await createDeck(deck);
        setIsOpen(false);
    };

    const createDeck = async (deck: { newDeckName:string, newDeckCategory: string, newDeckDescription: string }) => {
        try {
            await fetch('/api/create/deck', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(deck),
            }).then(() => {
                getDecks()
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <button
                type="button"
                className="bg-violet-950 text-white rounded-md py-2 px-4 hover:bg-violet-950/70 focus:outline-none focus:shadow-outline-blue"
                onClick={() => setIsOpen(true)}
            >
                Create a new deck
            </button>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-50 flex justify-center items-center">
                    <div className="p-6 rounded-md shadow-md" style={{backgroundColor : '#575369'}}>
                        <h2 className="text-lg font-bold mb-4">Create a new deck</h2>
                        <form onSubmit={handleSubmitDeck} className="flex flex-col gap-2">
                            <div className="mb-4">
                                <label htmlFor="deck_name" className="text-white block">Deck name:</label>
                                <input
                                    type="text"
                                    id="deck_name"
                                    value={newDeckName}
                                    onChange={(event) => setNewDeckName(event.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="category" className="text-white block">Category:</label>
                                <input
                                    type="text"
                                    id="category"
                                    value={newDeckCategory}
                                    onChange={(event) => setNewDeckCategory(event.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="text-white block">Description:</label>
                                <textarea
                                    id="description"
                                    value={newDeckDescription}
                                    onChange={(event) => setNewDeckDescription(event.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            {error && <p className="flex justify-center text-purple-300">{error}</p>}

                            <div className="flex gap-3">
                                <button type="button" className="bg-violet-900 hover:bg-violet-950 text-white px-4 py-2 rounded-md" onClick={() => setIsOpen(false)}>
                                    Cancel
                                </button>
                                <button type="submit" className=" bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-md">
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;
