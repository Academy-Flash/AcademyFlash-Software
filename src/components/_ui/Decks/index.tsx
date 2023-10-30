import { VscCircleLargeFilled } from 'react-icons/vsc'
import { useEffect, useState } from "react";
import Link from "next/link"

interface Deck {
    id: number;
    deck_name: string;
    rating: number;
    category: string;
    description: string;
}

export const Decks = () => {

    const [decks, setDecks] = useState<Deck[]>([]);

    useEffect(() => {
        fetch('/api/getDecks')
          .then((response) => response.json())
          .then((data) => {
            setDecks(data)
          });
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