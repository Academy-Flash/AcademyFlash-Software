import { useState } from 'react';
import { Cards }  from '@/components/_ui/Cards'
import { title } from 'process';
import { url } from 'inspector';


export default function Decks() {

    // const backgroundColors = [
    //     'bg-red-300', 'bg-red-400', 'bg-red-500', 'bg-red-600', 'bg-red-700', 'bg-red-800', 'bg-red-900',
    //     'bg-yellow-300', 'bg-yellow-400', 'bg-yellow-500', 'bg-yellow-600', 'bg-yellow-700', 'bg-yellow-800', 'bg-yellow-900',
    // ]

    const backgroundColors = [
        'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink',
    ]

    const [cards, setCards] = useState<{ question: string; answer: string }[]>([]);

    const [content, setContent] = useState([
        {
            title: 'Exatas',
        },
        {
            title: 'Humanas',
        },
        {
            title: 'Biológicas',
        }
    ]);

    const [decks, setDecks] = useState<{ title: string; url:string; cardsCount: number; cards: {question: string; answer: string} [] }[]>([
        {
            title: 'Baralho 1',
            cardsCount: 0,
            cards: [],
            url: '/cards',
        },
        {
            title: 'Baralho 2',
            cardsCount: 0,
            cards: [],
            url: '/cards',
        },
        {
            title: 'Baralho 3',
            cardsCount: 0,
            cards: [],
            url: '/cards',
        },
        {
            title: 'Baralho 4',
            cardsCount: 0,
            cards: [],
            url: '/cards',
        },
        {
            title: 'Baralho 5',
            cardsCount: 0,
            cards: [],
            url: '/cards',
        },
        {
            title: 'Baralho 6',
            cardsCount: 0,
            cards: [],
            url: '/cards',
        }
    ]);


    const [newDeckTitle, setNewDeckTitle] = useState<string>('');
    const [newQuestion, setNewQuestion] = useState<string>('');
    const [newAnswer, setNewAnswer] = useState<string>('');

    {/* Function that choose a random number*/}
    const getRandomInt = (max: number) => {
        return Math.floor(Math.random() * max);
    }

    {/* Function that choose a random color*/}
    const getRandomColor = () => {
        return backgroundColors[getRandomInt(backgroundColors.length)];
    }

    const handleAddDeck = () => {
      if (newDeckTitle.trim() === '') return;
        const newDeck = {
            title: newDeckTitle,
            cardsCount: 0,
            cards: [],
            url: '/cards',
        };
      setDecks([...decks, newDeck]);
      setNewDeckTitle('');
    };
  
    const handleDeleteDeck = (index: number) => {
      const updatedDecks = [...decks];
      updatedDecks.splice(index, 1);
      setDecks(updatedDecks);
    };

    const handleAddFlashcard = (deckIndex: number, newFlashcard: { question: string; answer: string }) => {
        const updatedDecks = [...decks];
        updatedDecks[deckIndex].cards.push(newFlashcard);
        setDecks(updatedDecks);
    };

    const handleAddFlashcardToDeck = (deckIndex: number) => {
        if (newQuestion.trim() === '' || newAnswer.trim() === '') return;
      
        const newFlashcard = {
          question: newQuestion,
          answer: newAnswer,
        };
      
        handleAddFlashcard(deckIndex, newFlashcard);
        setNewQuestion('');
        setNewAnswer('');
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
                {/* 
                <Cards onDelete={handleDeleteDeck} /> 
                */}
            </div>

            <div>
                {
                    content.map((content, i) => (
                        <>
                        
                        <p className='font-bold text-3xl border-t-2 border-black'>{content.title}</p>
                        
                        <section className='grid grid-flow-col auto-cols-max gap-2 overflow-x-auto  content-center mb-10'>
                                {
                                    decks.map((deck) => (
                                        <>
                                            <div className="relative w-32 h-44 m-5"  style={{ cursor: 'pointer'}}>
                                                <div className="absolute top-0 left-0 w-full h-full border-2 border-gray-500 rounded-lg p-4 transform rotate-3" style={{backgroundColor: backgroundColors[i]}}></div>
                                                <div className="absolute top-1 left-1 w-full h-full border-2 border-gray-500 rounded-lg p-4 transform rotate-2" style={{backgroundColor: backgroundColors[i]}}></div>
                                                <div className="absolute top-2 left-2 w-full h-full border-2 border-gray-500 rounded-lg p-4 transform rotate-1" style={{backgroundColor: backgroundColors[i]}}>
                                                    <div className='bg-red-300 relative bottom-0  rounded-lg w-full h-full '>
                                                        <p>{deck.title}</p>
                                                        <p>{deck.cardsCount}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                } 
                        </section>
                        </>
                    ))
                }    

            </div>

            
            {
                /*
                
                    <section className="grid overflow-x-auto grid-cols-1 gap-4 content-center lg:grid-cols-3 mb-20">
                        <div className="overflow-x-auto overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-full h-fit items-center"><Cards/></div>
                        <div className="overflow-x-auto overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-full h-fit items-center"><Cards/></div>
                        <div className="overflow-x-auto overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-full h-fit items-center"><Cards/></div>
                        <div className="overflow-x-auto overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-full h-fit items-center"><Cards/></div>
                        <div className="overflow-x-auto overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-full h-fit items-center"><Cards/></div>
                        <div className="overflow-x-auto overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-full h-fit items-center"><Cards/></div>
                    </section>
                
                */
            }
        </main>
    )
}
