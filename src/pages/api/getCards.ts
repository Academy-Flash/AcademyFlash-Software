import { NextApiRequest, NextApiResponse } from 'next';
import prisma from './_base';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const deck_name = req.body.deck_name;

    const cards = await prisma.cards.findMany({
      where: {
        decks: {
          deck_name: deck_name,
        },
      },
      include: {
        decks: true, // apenas se você também quiser incluir os detalhes do deck na resposta
      },
    });

    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar os baralhos.' });
  } finally {
    await prisma.$disconnect();
  }
}

