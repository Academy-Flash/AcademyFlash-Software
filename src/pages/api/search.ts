import { NextApiRequest, NextApiResponse } from 'next';
import prisma from './_base';
import { decks } from '@prisma/client';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 
    if (req.method = "GET") {
        try {
            const { q: query } = req.query;

            if (typeof query !== 'string') throw new Error('Query is not a string.');

            const decks: Array<decks> = await prisma.decks.findMany({
                where: {
                    OR: [
                        {
                            deck_name: {
                                contains: query,
                                mode: 'insensitive',
                            },
                        },
                        {
                            description: {
                                contains: query,
                                mode: 'insensitive',
                            },
                        },
                    ],
                },
            });

            await prisma.searchQuery.create({
                data: {
                  query,
                },
            });
            
            res.status(200).json(decks);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao recuperar os baralhos.' });
        } finally {
            await prisma.$disconnect();
        }
    } else {
        res.status(405).json({ error: 'Método não permitido.' });
    }

}
