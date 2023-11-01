import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

interface CurrentCommunityContextType {
  currentCommunity: string;
  setCurrentCommunity: Dispatch<SetStateAction<string>>;
}

const CurrentCommunityContext = createContext<CurrentCommunityContextType | undefined>(undefined);

export function CurrentCommunityProvider({ children }: { children: ReactNode }) {
  const [currentCommunity, setCurrentCommunity] = useState<string>('UNIFESP'); 

  return (
    <CurrentCommunityContext.Provider value={{ currentCommunity, setCurrentCommunity }}>
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
