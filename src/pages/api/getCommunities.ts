import { NextApiRequest, NextApiResponse } from 'next';
import prisma from './_base';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    
  try {

    const communities = await prisma.communities.findMany({
      where: {
        community_users: {
          some: {
            users: {
              id: req.body.user_id
            }
          }
        }
      }
    });
    res.status(200).json( communities );

  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar os baralhos.' });
  } finally {
    await prisma.$disconnect();
  }
  
}
