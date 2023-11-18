import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction, useEffect } from 'react';

interface CurrentCommunityContextType {
  currentCommunity: string;
  setCurrentCommunity: Dispatch<SetStateAction<string>>;
  setCommunities: Dispatch<SetStateAction<Community[]>>;
  setDecks: Dispatch<SetStateAction<Deck[]>>;
  getDecks: () => Promise<Deck[]>; // Add the getDecks function
  communities: Community[];
  communityDecks: Deck[];
}

interface Community {
    id: number;
    community_name: string;
    description: string;
    date_creation: Date;
    user_count: number;
    card_count: number;
    URL_image: string;
}

interface Deck {
    id: number;
    deck_name: string;
    rating: number;
    category: string;
    description: string;
}

const CurrentCommunityContext = createContext<CurrentCommunityContextType | undefined>(undefined);

export function CurrentCommunityProvider({ children }: { children: ReactNode }) {
  const [currentCommunity, setCurrentCommunity] = useState<string>('UNIFESP'); 
  const [communities, setCommunities] = useState<Community[]>([]);
  const [communityDecks, setDecks] = useState<Deck[]>([]);

  async function getDecks(): Promise<Deck[]> {
    try {
      const response = await fetch('/api/getCommunityDecks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ com_name: currentCommunity }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setDecks(data);
      return data;
    } catch (error) {
      console.error('Error fetching decks:', error);
      return []; // Return an empty array as a default value
    }
  }

  useEffect(() => {
    async function getCommunities() {
      fetch('/api/getCommunities')
          .then((response) => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then((data) => {
              setCommunities(data)
          })
          .catch((error) => {
              console.error('Error fetching communities:', error);
          });
    }

    getDecks();
    getCommunities();
  }, [currentCommunity]);

  return (
    <CurrentCommunityContext.Provider value={{ currentCommunity, setCurrentCommunity, communities, setCommunities, communityDecks, setDecks, getDecks }}>
      {children}
    </CurrentCommunityContext.Provider>
  );
}

export function useCurrentCommunity() {
  const context = useContext(CurrentCommunityContext);
  if (context === undefined) {
    throw new Error('useCurrentCommunity must be used within a CurrentCommunityProvider');
  }
  return context;
}
