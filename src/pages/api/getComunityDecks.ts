import { NextApiRequest, NextApiResponse } from 'next';
import prisma from './_base';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    prisma.community_decks.findMany()
    const decks = await prisma.decks.findMany({
      where: {

      }

      /*include: {
        folder_deck: {
          include: {
            folders: {
              include: {
                community_folders: {
                  include: {
                    communities: {
                      select: {
                        id: true,
                      }
                    }
                  }
                }
              }
            }
          }
        }*/
      }
    );

    res.status(200).json( decks );
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar os baralhos.' });
  } finally {
    await prisma.$disconnect();
  }
  
}
