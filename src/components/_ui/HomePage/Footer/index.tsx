// Footer.tsx
import React from 'react';
import { ComponentGithubApp, ComponentInstagramApp, ComponentLinkedinApp } from "./socialNetwork";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 p-10 items-center w-full bg-full ">
      <div className="flex justify-center space-x-20">
        {/* Não consegui fazer o espaço entre os itens ficar igual */}
        {/* 1 */}
        <div className="flex flex-col items-start">
          <h1 className="text-lg font-bold">Participantes do Projeto:</h1>

          {/* div meio porca, mas dá p fazer um componente só p ela */}
          <div className="flex items-center">
            <p>Eduardo Veríssimo</p>
            <img src="/img/Ricardinho.png" alt="Logo" className="h-5 ml-2" />
            <img src="/img/Ricardinho.png" alt="Logo" className="h-5 ml-2" />
          </div>

          <p>Fernando Marcelino</p>
          <p>Guilherme Ferreira</p>
          <p>Marcos Bauab</p>
          <p>Marcos Seiji</p>
          <p>Mateus Vespasiano</p>
          <p>Raphael Damasceno</p>
        </div>

        {/* 2 */}
        <div className="flex flex-col items-center">
            <h1 className="text-lg font-bold">Redes Sociais:</h1>
          <ComponentGithubApp />
          <div className="flex justify-between p-3">
            <ComponentInstagramApp />
            <ComponentLinkedinApp />
          </div>
        </div>
        
      </div>
      <p>Agradecimentos</p>
    </footer>
  );
};

export default Footer;
