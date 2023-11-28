// src/components/Comunidades.tsx

import React, { useEffect, useState } from 'react';
import { SearchCommunities } from '@/components/_ui/SearchCommunities';
import { Community, useCurrentCommunity } from '@/context/CurrentCommunityContext';

export default function Comunidades() {
  const [searchedCommunities, setSearchedCommunities] = useState<Community[]>([]);
  const { getCommunities, communities } = useCurrentCommunity();
  const colors = [ '#2A37A3', '#592386', '#284875', '#6A2875', '#382875']
  
  useEffect(() => {
    /* async function fetchCommunities() {
      try {
        const response = await fetch(`/api/getCommunities`);
        const data = await response.json();
        console.log(data);
        setCommunities(data);
      } catch (error) {
        console.error('Erro ao buscar comunidades:', error);
      }
    } 

    fetchCommunities();*/
    setSearchedCommunities(communities)


  }, [communities]);


  return (
    <main className="flex-col mx-auto my-8 h-[70%]">
      <SearchCommunities searchedCommunities={searchedCommunities} setSearchedCommunities={setSearchedCommunities} />
      <section className='flex items-center justify-center'>
        <div className="flex items-center justify-center m-5  bg-[#6246CC] rounded-full w-5/12 h-24">
              <h1 className="text-3/4 text-lg font-semibold">Comunidades</h1>
            </div>
          </section>

          <div className="flex items-start justify-center overflow-y-auto h-[95%]">
            <div className="flex flex-wrap justify-center w-full">
              {searchedCommunities.map((community, index) => (
                <div 
                  key={community.id} 
                  className="p-4 rounded-3xl shadow w-[80%] h-24 mb-5 border-2 border-white"
                  style={{backgroundColor: `${colors[index % colors.length]}`}}
                >
                  <h2 className="text-lg font-semibold mb-2 text-white">{community.community_name}</h2>
                </div>
              ))}
        </div>
      </div>
    </main>
  );
}
