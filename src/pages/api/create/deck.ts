import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../_base';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    const deck = await prisma.decks.create({
        data: {
            deck_name: req.body.newDeckName,
            description: req.body.newDeckDescription,
            category: req.body.newDeckCategory,
            rating: 1,
        }
    })    

    res.status(200).json( {ok: true} );
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar os baralhos.' });
  } finally {
    await prisma.$disconnect();
  }
  
}