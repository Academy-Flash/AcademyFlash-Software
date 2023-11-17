import { FiSearch } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCurrentCommunity } from '@/pages/context/CurrentCommunityContext';
// npm install axios

interface Deck {
    id: number;
    deck_name: string;
    rating: number;
    category: string;
    description: string;
}

interface SearchProps {
    onSearch: (data: string) => void;
}

export const Search: React.FC<SearchProps> = ({onSearch}) => {
    const [input, setInput] = useState('');

    const [decks, setDecks] = useState<Deck[]>([]);
    const { currentCommunity, setCurrentCommunity  } = useCurrentCommunity();

    const router = useRouter();
    const search = useSearchParams();

    // useEffect(() => {
    //     async function getDecks() {
    //         try {
    //         const response = await fetch('/api/getCommunityDecks', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ com_name: currentCommunity}), // Use get_current_community() here
    //         });
    
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    
    //         const data = await response.json();
    //         setDecks(data);
    //         console.log(data)
    //         } catch (error) {
    //             console.error('Error fetching decks:', error);
    //         }
    //     }
    //     getDecks();
    //     }, [currentCommunity]);

    async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        if (input === '') {
            alert('Digite alguma coisa')
            return
        } else {
            try {
                // const encodedInput = encodeURIComponent(input);
                // const response = await fetch(`/api/search?query=${encodedInput}`);
                // router.push(`/index?q=${encodedInput}`)

                // const searchQuery = search ? search.get("q") : null;

                // const endodedSearchQuery = encodeURIComponent(searchQuery || '');
                

                onSearch(input)
            } catch (error) {
                alert('Card não encontrado')
                setInput('') /* Limpa o campo */
            }
        }
    }

    return (

        <section className='bg-blue-400 text-white font-bold p-2 rounded-md'>
            
            <form className="flex" onSubmit={handleSearch}>
            {/* <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-2' onClick={handleSearch}> */}
                <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-2' >
                    <FiSearch size={20} />
                </button>

                <input className='w-full h-full px-2 py-2 rounded-md bg-white text-black'
                    type='text' placeholder="Pesquise um deck"
                    value={input}
                
                    onChange={(event) => setInput(event.target.value)}
                />
                {/* <ul>
                    {decks.length > 0 ? (
                        decks.map((deck, index) => (
                            <li>
                            
                                <a
                                key={index}
                                href={`/cards?deck_name=${deck.deck_name}`}>
                                {deck.deck_name}
                                </a>
                            </li>
                        ))
                    ) : (
                        <p className="text-white">No decks available.</p>
                    )}
                </ul>  */}
            </form>

        </section>
    )
}
