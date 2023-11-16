import { useState, useEffect } from 'react';
import { VscCircleLargeFilled } from 'react-icons/vsc'
import Link from "next/link"
import useCommunity from '@/pages/api/getCurrentCommunity';
import { useCurrentCommunity } from '@/pages/context/CurrentCommunityContext';

interface Community {
    id: number;
    community_name: string;
    description: string;
    date_creation: Date;
    user_count: number;
    card_count: number;
}

export const Group = () => {
    const { currentCommunity, setCurrentCommunity  } = useCurrentCommunity();

    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    }

    const handleCommunitySelection = (communityName: string) => {
        setCurrentCommunity(communityName);
        setShowPopup(false);
      };

    const [communities, setCommunities] = useState<Community[]>([]);
    
    useEffect(() => {
        fetch('/api/getCommunities')
          .then((response) => {
            // Verifica se a resposta da API é bem-sucedida
            if (!response.ok) {
              throw new Error(`Erro: ${response.status}`); // Lança um erro se a resposta não for bem-sucedida
            }
            return response.json();
          })
          .then((data) => {
            // Verifica se os dados estão no formato esperado
            if (Array.isArray(data)) {
              setCommunities(data);
            } else {
              console.error('Formato de dados inesperado:', data);
            }
          })
          .catch((error) => {
            // Captura erros de rede e erros durante o processamento da resposta
            console.error('Falha ao buscar comunidades:', error);
          });
      }, []);
      

    return (
        <>
            <section 
                className="flex justify-between text-white font-bold py-2 px-4 rounded-md dark:bg-black"
                style={{ backgroundColor: '#215A36' }}
            >
                <div>
                    <span className="font-bold text-left block">CURRENT GROUP</span>
                    <span className="bg-green-700 text-white font-bold block" style={{ backgroundColor: '#215A36' }} >
                        {currentCommunity}
                    </span>
                </div>

                <button 
                    className='bg-green-900 text-white font-bold p-2 rounded-md flex items-center justify-center' 
                    onClick={handleButtonClick}
                    style={{ backgroundColor: '#11301C' }}
                >
                        Choose Other
                </button>
            
            </section>

            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div className="bg-gray-700 p-4 rounded-md justify-center">
                        <h2 className="text-lg font-bold mb-2">Choose Other Group</h2>
                        <div className="flex flex-col gap-2">
                            {communities.map((communities, index) => (
                                <button
                                    className="hover:bg-white/10 transition duration-200 rounded-3xl w-full flex items-center justify-left gap-2 p-1 text-white"
                                    key={index}
                                    onClick={() => handleCommunitySelection(communities.community_name)}
                                >
                                    <VscCircleLargeFilled size={30} className={`${communities.community_name === "Personal" ? "text-red-500" : "text-green-500"}`} /> 
                                    {communities.community_name}
                                </button>
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-green-900 text-white font-bold p-2 rounded-md" onClick={() => setShowPopup(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
