import { FiSearch } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { useCurrentCommunity } from '@/context/CurrentCommunityContext';

interface Deck {
    id: number;
    deck_name: string;
    rating: number;
    category: string;
    description: string;
}

export const SearchDecks = () => {
    const [input, setInput] = useState('');

    const { communityDecks, setDecks, getDecks } = useCurrentCommunity();

    useEffect(() => {
        async function handleDecks() {
            if (input === '') {
                await getDecks();
                return;
            }

            let decksData = await getDecks();

            setDecks(decksData.filter((deck) =>
                deck.deck_name.toLowerCase().includes(input.toLowerCase())
            ))
        }

        handleDecks();
    }, [input]);

    async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        if (input === '') {
            alert('Digite alguma coisa')
            setInput('')
            return
        } 

        const filteredDecks = communityDecks.filter((deck: Deck) => deck.deck_name.toLowerCase().includes(input.toLowerCase()))
        setDecks(filteredDecks)
    }

    return (

        <section className='bg-blue-400 text-white font-bold p-2 rounded-md'>
            
            <form className="flex" onSubmit={handleSearch}>
                <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-2'>
                    <FiSearch size={20} />
                </button>

                <input className='w-full h-full px-2 py-2 rounded-md bg-white text-black'
                    type='text' placeholder="Pesquise um deck"
                    value={input}
                
                    onChange={(event) => setInput(event.target.value)}
                />
            </form>

        </section>
    )
}
