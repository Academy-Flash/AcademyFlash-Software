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
import ProfileBox from "@/components/_ui/ProfileBox";

const prisma = new PrismaClient();

export default function Home() {

  const [userCount, setUserCount] = useState<number>(0);
  const [config, setConfig] = useState(false); // Use useState for config
  const [configBox, setProfileBox] = useState(false); // Use useState for profile box

  function toggleConfig() {
    setConfig(prevConfig => !prevConfig);
  }

  function toggleProfileBox() {
    setProfileBox(prevProfileBox => !prevProfileBox);
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
      
      {config && (
        <div className={`transition duration-300 ease-in-out ${config ? 'opacity-100' : 'opacity-0'} fixed top-0 left-0 w-full h-full bg-black z-10 `}/>
      )}

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
      
      <div className={`transition duration-300 ease-in-out z-20 ${config ? 'opacity-100' : 'opacity-0'}`}>
        <ConfigBox onToggle={toggleConfig} />
      </div>
      
      <div className={`transition duration-300 ease-in-out z-20 ${config ? 'opacity-100' : 'opacity-0'}`}>
        <ProfileBox onToggle={toggleProfileBox} />
      </div>

    </main>
  )
}
