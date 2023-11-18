import { Group } from "../components/_ui/Group";
import { Decks } from "@/components/_ui/Decks";
import { Search } from "@/components/_ui/Search";
import { useEffect, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState('');  

  // useEffect(() => {
  //   async function fetchSearch() {
  //     console.log(search);
      
  //     const encodedInput = encodeURIComponent(search);
  //     const response = await fetch(`/api/search?q=${encodedInput}`);
  //     console.log(await response.json())
  //     // setDecks(await response.json())

  //   }

  //   fetchSearch();
  // }, [search])

  return (
    <main className="w-[101%] flex flex-col gap-3 h-full p-6 overflow-y-auto">
      <Group />
      <Search onSearch={(data) => setSearch(data)} />
      <Decks />      
    </main>
  )
}
