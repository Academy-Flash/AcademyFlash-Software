import Link from 'next/link';

export default function Custom404() {
    return (
      <div className="h-full flex items-center justify-center bg-gray-700">
        <div className="p-8 w-[80%] flex flex-col gap-4 bg-white rounded-lg shadow-md">
          <h2 className="text-4xl font-extrabold text-gray-800">404 - Página não encontrada</h2>
          <p className="text-gray-600">A página que você está procurando não existe.</p>
          <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-fit">
              Voltar para a página inicial
          </Link>
        </div>
      </div>
    )
}