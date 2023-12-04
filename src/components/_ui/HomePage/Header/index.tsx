// Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className={`bg-purple-800 text-white flex-col items-center justify-center p-2`}>
      <div className="flex items-center justify-between">
        <img src="/img/Ricardinho.png" alt="Logo" className="h-10 mr-2" />
        <h1 className="text-xl font-bold">ACADEMYFLASH</h1>
        <button className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
          Login/Sign in
        </button>
      </div>
      <div>
        <h2 className="text-base font-bold flex justify-end">Desvende o conhecimento, carta por carta.</h2>
      </div>
    </header>
  );
};

export default Header;
