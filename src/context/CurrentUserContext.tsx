import React, { createContext, useState, useContext, useEffect } from 'react';

interface User {
    username: string,
    email: string,
    id: number
}

interface CurrentUserContextProps {
    currentUser: User;
    setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
}

export const CurrentUserContext = createContext<CurrentUserContextProps>({
    currentUser: {
        username: '',
        email: '',
        id: 0
    },
    setCurrentUser: () => {},
});

export const CurrentUserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User>({
        username: '',
        email: '',
        id: 0
    });

    useEffect(() => {
    async function getCurrentUser() {
      fetch('/api/getCurrentUser')
        .then((response) => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log('User fetched:', data);
          setCurrentUser(data)
        })
        .catch((error) => {
          console.error('Error fetching user:', error);
        });
    }
    getCurrentUser();
  }, [])

    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUserContext.Provider>
    );
};

export function useCurrentUser() {
  const context = useContext(CurrentUserContext);
  if (context === undefined) {
    throw new Error('useCurrentUser must be used within a CurrentUserProvider');
  }
  return context;
}
