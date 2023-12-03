import { Group } from "../components/_ui/Group";
import { Decks } from "@/components/_ui/Decks";
import { SearchDecks } from "@/components/_ui/SearchDecks";
import logo from "/img/Ricardinho.png";

export default function HomePage() {

  return (
        <div className="font-sans">
            <header className="bg-purple-800 text-white flex-col items-center justify-center p-2 pb-10">
                <div className="flex items-start justify-between pb-5">
                    <img src="/img/Ricardinho.png" alt="Logo" className="h-10 mr-2" />
                    <button className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                        Login/Sign in
                    </button>
                </div>
                <h1 className="text-xl flex justify-center font-bold">ACADEMYFLASH</h1>
                <p className="text-sm flex justify-center">Desvende o conhecimento, carta por carta.</p>
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
                <footer className="bg-gray-200 p-4 text-center">
                <p>Agradecimentos</p>
                </footer>
            </main>
        </div>
  )
}