import Link from 'next/link'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

export const Search = () => {
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
        <div className='w-full h-full justify-center relative items-center'>

            <div className='max-w-screen-lg w-full h-full flex-row relative'>

                <section className="flex items-center space-x-2 bg-green-700 max-w-fit text-white font-bold p-2 rounded-md">

                    <div className="pl-4 font-bold text-left ">Current Group
                        <div className="pl-0 flex bg-green-700 text-white font-bold px-2 rounded-md">Federal University of São Paulo
                            <div className="pl-4"><Link href='/group' className='bg-green-900 text-white font-bold px-2  rounded-md'>Choose Other</Link></div>
                        </div>
                    </div>
                    
                </section>


                <section className='bg-blue-700 max-w-max text-white font-bold p-2 rounded-md mt-10'>

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

                </section>

            </div>

        </div>
    )
}
