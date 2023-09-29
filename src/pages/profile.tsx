import React, { useState } from 'react';
import { BiUserCircle} from 'react-icons/bi';
import { FiCalendar } from 'react-icons/fi';
import { LiaUserFriendsSolid } from 'react-icons/lia';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';

interface ConfigGearProps {
  onToggle: () => void;
}

export default function profile({ onToggle }: ConfigGearProps) {
  return (
    /* Container flexbox para centralizar o conteúdo */
    <div
      className={`w-full h-full flex-col items-center justify-center relative overflow-y-auto`}
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
      
      <div className='flex items-center justify-center pt-5 text-center' >

        <FiCalendar size={50} style={{color : '#f2be5c'}}/>
        <h1 className='pl-4 text-white text-xl font-bold' style={{color : '#f2be5c'}}>  
          Calendar
        </h1>

      </div>

            
      <div className='flex items-center justify-center pt-5 text-center' >

        <LiaUserFriendsSolid size={50} style={{color : '#f2be5c'}}/>
        <h1 className='pl-4 text-white text-xl font-bold' style={{color : '#f2be5c'}}>  
          Friends
        </h1>

      </div>

  
      <div className='flex items-center justify-center pt-5 text-center' >

        <AiOutlineMail size={50} style={{color : '#f2be5c'}}/>
        <h1 className='pl-4 text-xl font-bold' style={{color : '#f2be5c'}}>  
          News
        </h1>

      </div>

      
      <div className='flex items-center justify-center pt-5 text-center' >

        <AiOutlineUser size={50} style={{color : '#f2be5c'}}/>
        <h1 className='pl-4 text-xl font-bold' style={{color : '#f2be5c'}} >  
          Profile Settings 
        </h1>

      </div>


    </div>
  );
}
