import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react";
import { Group } from "../components/_ui/Group";
import { Search } from "@/components/_ui/Search";
import { RecentFolders } from '../components/_ui/RecentFolders';
import { RecentCards } from "@/components/_ui/RecentCards";
import { DaysStrike } from "@/components/_ui/DaysStrike";
import { ConfigGear } from "@/components/_ui/ConfigGear";

const prisma = new PrismaClient();

export default function Home() {

  const [userCount, setUserCount] = useState<number>(0);

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
        <div>oi</div>
        <ConfigGear />
      </div>

      <Group />

      <Search />
      
      <div className='flex gap-2 w-full'> 
        <DaysStrike />
        <RecentCards/>
      </div>

      <RecentFolders />

    </main>
  )
}
