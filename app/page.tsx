'use client';


import Image from 'next/image'
import Link from 'next/link'
import {useState } from 'react'
import { FiSearch } from 'react-icons/fi'


export default function Home() {
  const [input, setInput] = useState('')

  async function handleSearch() {
    if (input === '') {
      alert('Digite alguma coisa')
      return
    } else {
      try {
        alert(input)
        setInput('') 
      } catch (error) {
        alert('Card não encontrado')
        setInput('') /* Limpa o campo */
      }
    }
  }

  return (



    <main className='py-10 px-10 items-center'>
    
        

        <div className="bg-green-700 max-w-max text-white font-bold p-2 rounded-md">

          <div className="font-bold align-bottom px-2">Current Group</div>

          <div className="bg-green-700 text-white font-bold px-2 rounded-md inline-flex">Federal University of São Paulo</div>
          
          <div className="mt-4 items-center inline-flex">
            <Link href='/dashboard' className='bg-green-900 text-white font-bold px-2  inline-flex rounded-md'>Choose Other</Link>
          </div>
        </div>

        
        <div className='bg-blue-700 max-w-max text-white font-bold p-2 rounded-md mt-10'>

          <div className="inline-flex">
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-2' onClick={handleSearch}>
              <FiSearch size={20} />
            </button>

            <input className='px-2 py-2 rounded-md bg-white text-black'
              type='text' placeholder="Pesquise o card" 
              value={input}

              onChange={(event) => setInput(event.target.value)}
            />
          </div>

        </div>

    </main>
  )
}
