import { Cards }  from '@/components/_ui/Cards'

export default function Decks() {
    return (
        <main className="flex-col items-center justify-center">
            <section className='flex items-center justify-center m-20'>
                <button
                    onClick={() => window.location.href = '/decks'}
                    className="bg-blue-400 hover:bg-blue-500 text-white font-bold w-60 h-20 py-2 px-4 rounded-full">
                    Seus Baralhos
                </button>
            </section>

            <section className="grid overflow-x-auto grid-cols-1 gap-4 content-center lg:grid-cols-3 mb-20">
                <div className="overflow-x-auto overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-full h-fit items-center"><Cards/></div>
                <div className="overflow-x-auto overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-full h-fit items-center"><Cards/></div>
                <div className="overflow-x-auto overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-full h-fit items-center"><Cards/></div>
                <div className="overflow-x-auto overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-full h-fit items-center"><Cards/></div>
                <div className="overflow-x-auto overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-full h-fit items-center"><Cards/></div>
                <div className="overflow-x-auto overflow-hidden flex-row rounded-[40px] border-black border-4 bg-gray-100 drop-shadow-lg p-[30px] w-full h-fit items-center"><Cards/></div>
            </section>
        </main>
    )
}
