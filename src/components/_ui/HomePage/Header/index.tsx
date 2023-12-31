// Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className={`bg-purple-800 text-white flex-col justify-center p-2`}>
      <div className="flex items-center justify-between">
        <div className="flex justify-start pr-10 pl-10">
          <img src="/img/Ricardinho.png" alt="Logo" className="h-10 mr-2" />
        </div>
        <div className="flex justify-center">
          <h1 className="text-xl font-bold">ACADEMYFLASH</h1>
        </div>
        
        <div className="flex justify-center">
          <Link href="/" className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
            Login/Sign in
          </Link>
        </div>
        
      </div>
      <div>
        <h2 className="text-base font-bold flex justify-end">Desvende o conhecimento, carta por carta.</h2>
      </div>
    </header>
  );
};

export default Header;
