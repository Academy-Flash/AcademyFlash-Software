import { useCurrentUser } from '@/context/CurrentUserContext'
import { useCurrentCommunity } from '@/context/CurrentCommunityContext';

interface CardInterface {
    question: string
    answer: string
    rating: number
    difficulty: number
    id_deck: number
}

interface CardsPageProps {
    showAnswer: boolean;
    cards : CardInterface[];
    index: number;
}


export const Cards = ({ showAnswer, cards, index}: CardsPageProps) => {
    const {currentUser} = useCurrentUser()
    const {currentCommunity} = useCurrentCommunity()

    function obterMesAbreviado(mes: number) {
        var mesesAbreviados = [
            "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
            "Jul", "Ago", "Set", "Out", "Nov", "Dez"
        ];
        return mesesAbreviados[mes];
    }

    var dataAtual = new Date();
    var ano = dataAtual.getFullYear();
    var mes = obterMesAbreviado(dataAtual.getMonth());
    var dia = ('0' + dataAtual.getDate()).slice(-2); // Adiciona um zero à esquerda, se necessário

    var dataFormatada = dia + ' ' + mes + ' ' + ano;

    return (
        
            <>         
                <section className="text-black flex items-center space-x-1">
                    <div className="font-bold">{currentCommunity}</div>
                    <div className="text-gray-500">{currentUser.username}</div>
                    <div className="text-gray-500">* {dataFormatada}</div>
                </section>
                <section className="text-black mt-5 text-base">
                    {cards.length > 0 ? cards[index].question : 'No cards found'}
                </section>

                {showAnswer && (<section className="text-black mt-5 text-base">
                    Answer: {cards[index].answer}
                </section>  )} 
            </>
    )
}
