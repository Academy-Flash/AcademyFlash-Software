// src/components/Deck.tsx
import React from 'react';

interface DeckProps {
  title: string;
  cardsCount: number;
  onDelete: () => void;
}

const Deck: React.FC<DeckProps> = ({ title, cardsCount, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{`${cardsCount} flashcards`}</p>
      <button onClick={onDelete} className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Excluir
      </button>
    </div>
  );
};

export default Deck;
