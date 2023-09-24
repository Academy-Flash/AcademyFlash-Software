import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react";
import { Group } from "../components/_ui/Group";
import { Search } from "@/components/_ui/Search";
import { RecentFolders } from '../components/_ui/RecentFolders';
import { RecentCards } from "@/components/_ui/RecentCards";
import { DaysStrike } from "@/components/_ui/DaysStrike";
import { ConfigGear } from "@/components/_ui/ConfigGear";
import Stars from "@/components/_ui/Stars"; 
import ConfigBox from "@/components/_ui/ConfigBox";

const prisma = new PrismaClient();

export default function Home() {

  const [userCount, setUserCount] = useState<number>(0);
  const [config, setConfig] = useState(true); // Use useState for config
  
  function toggleConfig() {
    setConfig(prevConfig => !prevConfig);
  }

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => {
        setUserCount(data.userCount);
      });
  }, []);

  return (
    <main className="w-full flex flex-col gap-3">
      
      <div className="flex justify-between">
        <Stars />
        <ConfigGear onToggle={toggleConfig}/>
      </div>

      <Group />

      <Search />
      
      <div className='flex gap-2 w-full'> 
        <DaysStrike />
        <RecentCards/>
      </div>

      <RecentFolders />
      
      <div className={`transition duration-300 ease-in-out ${config ? 'opacity-100' : 'opacity-0'}`}>
        <ConfigBox onToggle={toggleConfig} />
      </div>

    </main>
  )
}
