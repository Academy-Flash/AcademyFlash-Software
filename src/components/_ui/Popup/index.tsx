import React, { useState } from "react";

const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [newDeckName, setNewDeckName] = useState('');
    const [newDeckCategory, setNewDeckCategory] = useState('');
    const [newDeckDescription, setNewDeckDescription] = useState('');

    const handleSubmitDeck = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <button type='button' className='bg-blue-500 text-white rounded-md' onClick={() => setIsOpen(true)}>Create a new deck</button>
            {isOpen && (
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
                                <button type='button' className='bg-red-500 text-white px-4 py-2 rounded-md ml-2' onClick={() => setIsOpen(false)}>Cancel</button>
                            </form>
                        </div>
                </div>
            )}
        </>
    );
};

export default Popup;
