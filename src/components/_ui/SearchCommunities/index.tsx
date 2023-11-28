import { FiSearch } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { useCurrentCommunity, Community} from '@/context/CurrentCommunityContext';

interface SearchCommunitiesProps {
    searchedCommunities: Community[];
    setSearchedCommunities: React.Dispatch<React.SetStateAction<Community[]>>;
}

export const SearchCommunities = ({setSearchedCommunities, searchedCommunities}: SearchCommunitiesProps) => {
    const [input, setInput] = useState('');

    const {getCommunities, communities} = useCurrentCommunity();

    //const [searchedCommunities, setCommunities] = useState<Community[]>([]);

    useEffect(() => {
        async function handleDecks() {
            if (input === '') {
                setSearchedCommunities(await getCommunities());
                return;
            }

            let communitiesData = await getCommunities();

            setSearchedCommunities(communitiesData.filter((community: Community) =>
                community.community_name.toLowerCase().includes(input.toLowerCase())
            ))

            console.log(searchedCommunities)
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

        const filteredDecks = searchedCommunities.filter((deck: Community) => deck.community_name.toLowerCase().includes(input.toLowerCase()))
        setSearchedCommunities(filteredDecks)
        console.log(filteredDecks)
    }

    return (

        <section className='bg-[#6246CC] text-white font-bold p-2 rounded-md'>
            
            <form className="flex" onSubmit={handleSearch}>
                <button type='submit' className='bg-violet-900 hover:bg-violet-950 text-white font-bold py-2 px-4 rounded mx-2'>
                    <FiSearch size={20} />
                </button>

                <input className='w-full h-full px-2 py-2 rounded-md bg-white text-black'
                    type='text' placeholder="Pesquise por uma Comunidade"
                    value={input}
                
                    onChange={(event) => setInput(event.target.value)}
                />
            </form>

        </section>
    )
}
