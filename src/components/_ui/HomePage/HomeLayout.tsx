// Não estou utilizando esse componente

import React from 'react';

const HomeLayout: React.FC = ({ children }) => {
  return (
    <div className="font-sans">
      <header className="bg-purple-800 text-white flex-col items-center justify-center p-2">
        <div className="flex items-center justify-between">
          <img src="/img/Ricardinho.png" alt="Logo" className="h-10 mr-2" />
          <h1 className="text-xl font-bold">ACADEMYFLASH</h1>
          <button className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
            Login/Sign in
          </button>
        </div>
        <div>
          <h2 className="text-base font-bold flex justify-end">
            Desvende o conhecimento, carta por carta.
          </h2>
        </div>
      </header>

      <main className="p-4">{children}</main>

      <footer className="bg-gray-200 p-10 text-center fixed bottom-0 w-full">
        {/* Adicione o conteúdo específico do footer aqui */}
      </footer>
    </div>
  );
};

export default HomeLayout;
