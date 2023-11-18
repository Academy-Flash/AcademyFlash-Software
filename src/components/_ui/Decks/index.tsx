import { VscCircleLargeFilled } from 'react-icons/vsc'
import Link from "next/link"
import { useCurrentCommunity } from '@/context/CurrentCommunityContext';

export interface Deck {
    id: number;
    deck_name: string;
    rating: number;
    category: string;
    description: string;
}

export const Decks = () => {
    const { communityDecks } = useCurrentCommunity();

    return (
        <section className="flex w-full font-bold p-2 rounded-md flex-col gap-3" style={{ backgroundColor: '#575369'}}>
            {communityDecks.length > 0 ? (
                communityDecks.map((deck, index) => (
                    <Link
                        className="hover:bg-white/10 transition duration-200 rounded-3xl w-full flex items-center justify-left gap-2 p-1 text-white"
                        key={index}
                        href={`/cardspage?deck_name=${deck.deck_name}`}
                    >
                        <VscCircleLargeFilled size={30} style={{ color : '#933E1F'}} />
                        {deck.deck_name}
                    </Link>
                ))
            ) : (
                <p className="text-white">No decks available.</p>
            )}
        </section>
    );
}