import React, { useState } from "react";
import { useRouter } from "next/router";

const AddDeckPage = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await createDeck({ newDeckName: name, newDeckCategory: category, newDeckDescription: description });
        router.push('/');
    };

    const createDeck = async (deck: { newDeckName: string, newDeckCategory: string, newDeckDescription: string }) => {
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
        <div className="flex flex-col w-full h-full justify-center items-center gap-3">
            <h1>Add Deck</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="text-black"
                    />
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        className="text-black"
                    />
                </div>
                <button type="submit">Create Deck</button>
            </form>
        </div>
    );
};

export default AddDeckPage;
