import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react";
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
      <h1>{userCount}</h1>
      <Link href='/comunidades'>
        comunidades        
      </Link>
    </main>
  )
}
