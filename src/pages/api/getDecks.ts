import { NextApiRequest, NextApiResponse } from 'next';
import prisma from './_base';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const community_name = req.body.com_name
    const decks = await prisma.$queryRaw`
        SELECT * FROM decks WHERE id IN 
        (SELECT id_decks FROM community_decks WHERE id_community IN
        (SELECT id FROM communities WHERE community_name = ${community_name}))
        `
        // const decks = await prisma.decks.findMany(
    //   {
    //     where: {
    //       community_decks: {
            
    //       },
    //       id: 
    //     },
    //     include: {
    //       community_decks: {
    //         where: {
    //           id_community: community_name
    //         }
    //       },
    //       communities: true
    //     }
    //   }
    // );

    res.status(200).json( decks );
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar os baralhos.' });
  } finally {
    await prisma.$disconnect();
  }
  
}
