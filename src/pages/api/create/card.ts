import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../_base';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    const deckId = Number(req.body.deck)

    const card = await prisma.cards.create({
        data: {
            question: req.body.front,
            answer: req.body.back,
            difficulty: 1,
            rating: 1,
            id_deck: deckId
        }
    })    

    res.status(200).json( {ok: true} );
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar os baralhos.' });
  } finally {
    await prisma.$disconnect();
  }
  
}