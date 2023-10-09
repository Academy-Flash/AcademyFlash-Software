import { useState } from 'react';
import { Cards }  from '@/components/_ui/Cards'
import  Deck  from '@/components/_ui/Deck/deck'
import DeckList from '@/components/_ui/Deck/deckList';

export default function Decks() {

    const [decks, setDecks] = useState<{ title: string; cardsCount: number }[]>([]);
    const [newDeckTitle, setNewDeckTitle] = useState<string>('');
  
    const handleAddDeck = () => {
      if (newDeckTitle.trim() === '') return;
        const newDeck = {
            title: newDeckTitle,
            cardsCount: 0,
        };
      setDecks([...decks, newDeck]);
      setNewDeckTitle('');
    };
  
    const handleDeleteDeck = (index: number) => {
      const updatedDecks = [...decks];
      updatedDecks.splice(index, 1);
      setDecks(updatedDecks);
    };
  
    return (
        <main className="flex-col items-center justify-center">
            <section className='flex items-center justify-center m-20'>
                <button
                    onClick={() => window.location.href = '/decks'}
                    className="bg-blue-400 hover:bg-blue-500 text-white font-bold w-60 h-20 py-2 px-4 rounded-full">
                    Seus Baralhos
                </button>
            </section>

            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-semibold mb-4">Baralhos de Flashcards</h1>
                <div className="mb-4">
                    <input
                    type="text"
                    placeholder="Nome do Baralho"
                    value={newDeckTitle}
                    onChange={(e) => setNewDeckTitle(e.target.value)}
                    className="p-2 border border-gray-400 rounded mr-2"
                    />
                    <button
                    onClick={handleAddDeck}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                    Adicionar Baralho
                    </button>
                </div>
                <DeckList decks={decks} onDelete={handleDeleteDeck} />
            </div>
            
         
            <section className="grid overflow-x-auto grid-cols-1 gap-4 content-center lg:grid-cols-3 mb-20">
                <div className="overflow-x-auto overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-full h-fit items-center"><Cards/></div>
                <div className="overflow-x-auto overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-full h-fit items-center"><Cards/></div>
                <div className="overflow-x-auto overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-full h-fit items-center"><Cards/></div>
                <div className="overflow-x-auto overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-full h-fit items-center"><Cards/></div>
                <div className="overflow-x-auto overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-full h-fit items-center"><Cards/></div>
                <div className="overflow-x-auto overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-full h-fit items-center"><Cards/></div>
            </section>
        </main>
    )
}
