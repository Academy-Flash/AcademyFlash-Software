import { Group } from "../components/_ui/Group";
import { Decks } from "@/components/_ui/Decks";
import { SearchDecks } from "@/components/_ui/SearchDecks";
import logo from "/img/Ricardinho.png";


export default function HomePage() {
    return (
        <div className="font-sans">
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
                
            <main className="p-4">
                <section className="mb-4">
                {/* Deck de temas */}
                </section>
                <section className="mb-4">
                {/* Organize seus cards de estudo */}
                </section>
                <section className="mb-4">
                {/* Comunidades */}
                </section>
            </main>

            {/* Não está certo; ainda falta retirar a Footer global e alinhar o footer abaixo */}
            {/* Após isso, fazer as implementações do design */}
            <footer className="bg-gray-200 p-10 text-center fixed bottom-0 w-full">
                <div className="flex justify-left">

                    <div className="flex flex-col items-start">
                        <h1 className="text-lg font-bold">Participantes do Projeto:</h1>
                            {/* O exemplo no Duu; caso quiserem usar as redes sociais ao lado*/}
                            <div className="flex items-center mb-0">
                                <p>Eduardo Veríssimo</p>
                                    <img src="/img/Ricardinho.png" alt="Logo" className="h-3 ml-2" />
                                    <img src="/img/Ricardinho.png" alt="Logo" className="h-3 ml-2" />
                            </div>
                            <p>Fernando Marcelino</p>
                            <p>Guilherme Ferreira</p>
                            <p>Marcos Bauab</p>
                            <p>Marcos Seiji</p>
                            <p>Mateus Vespasiano</p>
                            <p>Raphael Damasceno</p>
                    </div>

                    {/* Aqui, colocar o logo do github e abaixo dele o logo do instagram e do linkedin*/}
                    <div className="flex flex-col justify-center items-center">
                        <img src="/img/Ricardinho.png" alt="Logo" className="h-30 mr-2" />

                        <div className="flex items-center mb-2">
                            <img src="/img/Ricardinho.png" alt="Logo" className="h-10 mr-2" />
                            <img src="/img/Ricardinho.png" alt="Logo" className="h-10 mr-2" />
                        </div>
                    </div>
                    
                </div>
                <p>Agradecimentos</p>
            </footer>
        </div>
  )
}