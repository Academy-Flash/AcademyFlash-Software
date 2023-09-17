import Link from 'next/link'


export const Group = () => {
    return (
        <section className="flex items-center space-x-2 bg-green-700 max-w-fit text-white font-bold p-2 rounded-md">

            <div className="pl-4 font-bold text-left ">Current Group
                <div className="pl-0 flex bg-green-700 text-white font-bold px-2 rounded-md">Federal University of São Paulo
                    <div className="pl-4"><Link href='/group' className='bg-green-900 text-white font-bold px-2  rounded-md'>Choose Other</Link></div>
                </div>
            </div>
        
        </section>
    )
}
