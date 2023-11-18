// src/components/Comunidades.tsx

import React, { useEffect, useState } from 'react';

interface Community {
  id: number;
  community_name: string;
}

export default function Comunidades() {
  const [communities, setCommunities] = useState<Community[]>([]);

  
  useEffect(() => {
    async function fetchCommunities() {
      try {
        const response = await fetch(`/api/getCommunities`);
        const data = await response.json();
        console.log(data);
        setCommunities(data);
      } catch (error) {
        console.error('Erro ao buscar comunidades:', error);
      }
    }

    fetchCommunities();
  }, []);

  return (
    <main className="container mx-auto my-8">
      <section className='flex items-center justify-center'>
        <div className="flex items-center justify-center m-5 mt-16 bg-[#77C3F2] rounded-full w-1/4 h-24">
          <h1 className="text-3/4 text-lg font-semibold">Comunidades</h1>
        </div>
      </section>

      <div className="grid grid-cols-0 gap-4 justify-stretch justify-items-center overflow-auto overflow-y-scroll">
        {communities.map((community) => (
          <div key={community.id} className="bg-white p-4 rounded-3xl shadow w-[80%] h-24">
            <h2 className="text-lg font-semibold mb-2 text-black">{community.community_name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
