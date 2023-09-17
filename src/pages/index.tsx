import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react";
import { Group } from "../components/_ui/Group";
import { Search } from "@/components/_ui/Search";
import { RecentFolders } from '../components/_ui/RecentFolders';
import { RecentCards } from "@/components/_ui/RecentCards";
import { DaysStrike } from "@/components/_ui/DaysStrike";

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

    <main>
      <div className='w-full h-full flex justify-center relative items-center'>

        <div className='max-w-screen-lg w-full h-full flex-row relative'>

          <Group />

          <Search />
          
          <div className='flex mt-5 space-x-2'> 
            <DaysStrike />

            <RecentCards />

          </div>

          <RecentFolders />

          {/*   */}

          
        </div>

      </div>
      
      <h1 className=" text-black">{userCount}</h1>
      <Link className=" text-black" href='/comunidades'>
        comunidades     
      </Link>

    </main>
  )
}
