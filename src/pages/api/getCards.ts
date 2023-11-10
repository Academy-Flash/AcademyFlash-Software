import { NextApiRequest, NextApiResponse } from 'next';
import prisma from './_base';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    
  try {
    const deck_name = req.body.deck_name

    const cards = await prisma.$queryRaw`
      SELECT * 
      FROM cards, decks
      WHERE decks.id = cards.id_deck and decks.deck_name = ${deck_name} 
      `

    res.status(200).json( cards );
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar os baralhos.' });
  } finally {
    await prisma.$disconnect();
  }
  
}
