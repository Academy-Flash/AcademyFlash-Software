// src/components/Comunidades.tsx

import React, { useEffect, useState } from 'react';

interface Community {
  id: number;
  community_name: string;
  // Adicione mais propriedades conforme necessário
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
      <h1 className="text-3xl font-semibold mb-4">Comunidades</h1>

      <div className="grid grid-cols-0 gap-4">
        {communities.map((community) => (
          <div key={community.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2 text-black">{community.community_name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
