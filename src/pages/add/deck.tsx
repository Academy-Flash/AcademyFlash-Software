import React, { useState } from "react";
import { useRouter } from "next/router";
import { useCurrentCommunity } from "@/pages/context/CurrentCommunityContext";

const AddDeckPage = () => {
    const { currentCommunity } = useCurrentCommunity();

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await createDeck({ newDeckName: name, newDeckCategory: category, newDeckDescription: description, newDeckCommunity: currentCommunity });
        router.push('/');
    };

    const createDeck = async (deck: { newDeckName: string, newDeckCategory: string, newDeckDescription: string, newDeckCommunity: string }) => {
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
        <div className="flex flex-col w-full h-full justify-center items-center gap-6">
            <h1 className="text-3xl font-bold mb-4">Add Deck to {currentCommunity}</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-md shadow-md"  style={{backgroundColor : '#575369'}}>
                <div className="mb-4">
                    <label htmlFor="name" className="text-white">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="w-full px-3 py-2 text-black border border-gray-300 rounded-md "
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="text-white">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        className="w-full px-3 py-2 border text-black border-gray-300 rounded-md"
                    />
                </div>
                <button type="submit" className="w-full bg-violet-950 text-white py-2 px-4 rounded-md hover:bg-violet-950/70 focus:outline-none focus:shadow-outline-blue">
                    Create Deck
                </button>
            </form>
        </div>
    );
};

export default AddDeckPage;
