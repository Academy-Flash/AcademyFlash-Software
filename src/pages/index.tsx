import { Group } from "../components/_ui/Group";
import { Decks } from "@/components/_ui/Decks";

export default function Home() {

  return (
    <main className="w-[101%] flex flex-col gap-3 h-full p-6 overflow-y-auto">
      <Group />
      <Decks />      
    </main>
  )
}
