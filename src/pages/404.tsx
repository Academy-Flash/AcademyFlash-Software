export default function Custom404() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="p-8 max-w-md w-full space-y-4 bg-white rounded-lg shadow-md">
          <h2 className="text-4xl font-extrabold text-gray-800">404 - Página não encontrada</h2>
          <p className="text-gray-600">A página que você está procurando não existe.</p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Voltar para a página inicial
          </button>
        </div>
      </div>
    )
}