import { NextApiRequest, NextApiResponse } from 'next';
import prisma from './_base';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {

    const decks = await prisma.$queryRaw`
      SELECT * 
      FROM decks, community_decks, communities 
      WHERE decks.id = community_decks.id_decks and communities.id = community_decks.id_community 
      and community_name = ${req.body.com_name}
      `

    res.status(200).json( decks );
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar os baralhos.' });
  } finally {
    await prisma.$disconnect();
  }
  
}
