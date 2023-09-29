import React, { useState } from 'react';
import { BiUserCircle} from 'react-icons/bi';
import { FiCalendar } from 'react-icons/fi';



interface ConfigGearProps {
  onToggle: () => void;
}

export default function profile({ onToggle }: ConfigGearProps) {
  return (
    /* Container flexbox para centralizar o conteúdo */
    <div
      className={`w-full h-full items-center justify-center`}
      style={{backgroundColor: '#F24130'}}
    >  
    
      <div className='w-full items-center justify-center pt-3' > 
      
        <BiUserCircle 
          size={100} 
          className='w-full' 
          style={{
            color: '#f2be5c',
            backgroundColor: '#F24130',
          }}
        />
      
      </div>

      <div className='w-full items-center justify-center pt-3 text-center' > 
      
        <h1 className='w-full text-white text-3xl font-bold'>Fabio Fagundes Silveira</h1>
        <h1 className='w-full pt-2 text-white text-xl font-bold'>fsilveira@unifesp.br</h1>

      </div>
      
      <div className='w-full flex items-center justify-center pt-3 text-center' >

        <FiCalendar/>
        <h1 className='w-full text-white text-xl font-bold'>  Pontuação: 100</h1>

      </div>


    </div>
  );
}
