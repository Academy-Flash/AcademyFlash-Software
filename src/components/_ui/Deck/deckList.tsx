// src/components/DeckList.tsx
import React from 'react';
import Deck from './deck';
import { Cards } from '@/components/_ui/Cards'; 

interface DeckListProps {
  decks: { title: string; cardsCount: number }[];
  onDelete: (index: number) => void;
}

const DeckList: React.FC<DeckListProps> = ({ decks, onDelete }) => {
  return (
    <div>
      {decks.map((deck, index) => (
        <Cards></Cards>
      ))}
    </div>
  );
};

{/*

<Deck
    key={index}
    title={deck.title}
    cardsCount={deck.cardsCount}
    onDelete={() => onDelete(index)}
/>
*/}

export default DeckList;
