import { NextApiRequest, NextApiResponse } from 'next';
import prisma from './_base';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const decks = await prisma.decks.findMany();

    res.status(200).json( decks );
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar os baralhos.' });
  } finally {
    await prisma.$disconnect();
  }
  
}
