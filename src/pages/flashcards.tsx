import React, { useState } from 'react';
import DeckList from '@/components/_ui/Deck/deckList';

const FlashcardPage: React.FC = () => {
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
    <div className="container mx-auto p-4">
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
  );
};

export default FlashcardPage;
