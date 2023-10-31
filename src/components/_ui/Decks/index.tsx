import { VscCircleLargeFilled } from 'react-icons/vsc'
import { useEffect, useState } from "react";
import Link from "next/link"
import useCommunity from '@/pages/api/getCurrentCommunity';

interface Deck {
    id: number;
    deck_name: string;
    rating: number;
    category: string;
    description: string;
}

export const Decks = () => {

    const {get_current_community} = useCommunity()
    const [decks, setDecks] = useState<Deck[]>([]);
    const [community_name, setCommunityName] = useState<string>(get_current_community());

    useEffect(() => {
        async function getDecks() {
            await fetch('/api/getDecks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({com_name: community_name}),
            }).then((response) => response.json())
            .then((data) => setDecks(data));
        }
        getDecks()
      }, []);

    return (

        <section className="flex bg-neutral-500 w-full font-bold p-2 rounded-md flex-col gap-3">

            {decks.map((deck, index) => (

            <Link
                className="hover:bg-white/10 transition duration-200 rounded-3xl w-full flex items-center justify-left gap-2 p-1 text-white"
                key={index}
                href={`/cards?deck_name=${deck.deck_name}`}
            >
                <VscCircleLargeFilled size={30} className='fill-green-300' /> 
                {deck.deck_name}
            </Link>

            ))}

        </section>
    )
}