import { VscCircleLargeFilled } from 'react-icons/vsc'
import { useEffect, useState } from "react";
import Link from "next/link"
import useCommunity from '@/pages/api/getCurrentCommunity';
import { useCurrentCommunity } from '@/pages/context/CurrentCommunityContext';

interface Deck {
    id: number;
    deck_name: string;
    rating: number;
    category: string;
    description: string;
}

export const Decks = () => {

    const [decks, setDecks] = useState<Deck[]>([]);
    const { currentCommunity, setCurrentCommunity  } = useCurrentCommunity();
    
    useEffect(() => {
        async function getDecks() {
            try {
            const response = await fetch('/api/getCommunityDecks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ com_name: currentCommunity}), // Use get_current_community() here
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setDecks(data);
            console.log(data)
            } catch (error) {
                console.error('Error fetching decks:', error);
            }
        }
    
        getDecks();
        }, [currentCommunity]);

    return (
        <section className="flex bg-neutral-500 w-full font-bold p-2 rounded-md flex-col gap-3">
            {decks.length > 0 ? (
                decks.map((deck, index) => (
                    <Link
                        className="hover:bg-white/10 transition duration-200 rounded-3xl w-full flex items-center justify-left gap-2 p-1 text-white"
                        key={index}
                        href={`/cardspage?deck_name=${deck.deck_name}`}
                    >
                        <VscCircleLargeFilled size={30} className="fill-green-300" />
                        {deck.deck_name}
                    </Link>
                ))
            ) : (
                <p className="text-white">No decks available.</p>
            )}
        </section>
    );
}