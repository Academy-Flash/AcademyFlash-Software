import { Group } from "../components/_ui/Group";
import { Decks } from "@/components/_ui/Decks";
import { SearchDecks } from "@/components/_ui/SearchDecks";

export default function Home() {

  return (
    <main className="w-[101%] flex flex-col gap-3 h-full p-6 overflow-y-auto">
      <Group />
      <SearchDecks />
      <Decks />      
    </main>
  )
}
