import Link from 'next/link'


export const Group = () => {
    return (
        <section className="flex justify-between bg-green-700 text-white font-bold py-2 px-4 rounded-md">
            <div>
                <span className="font-bold text-left block">CURRENT GROUP</span>
                <span className="bg-green-700 text-white font-bold block">Federal University of São Paulo</span>
            </div>

            <Link href='/group' className='bg-green-900 text-white font-bold p-2 rounded-md flex items-center justify-center'>Choose Other</Link>
        
        </section>
    )
}
