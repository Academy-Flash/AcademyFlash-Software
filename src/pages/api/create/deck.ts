import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../_base';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    console.log(req.body);

    const deck = await prisma.decks.create({
        data: {
            deck_name: req.body.newDeckName,
            description: req.body.newDeckDescription,
            category: req.body.newDeckCategory,
            rating: 1,
        }
    })    

    console.log(deck);

    const community = await prisma.communities.findFirst({
        where: {
            community_name: req.body.newDeckCommunity,
        }
    })

    if (!community) {
      return res.status(404).json({ error: 'Community not found' });
    }

    console.log(community);

    const community_deck = await prisma.community_decks.create({
        data: {
            id_decks : deck.id,
            id_community: community.id,
        }
    })

    console.log(community_deck);

    res.status(200).json( {ok: true} );
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao recuperar os baralhos.' });
  } finally {
    await prisma.$disconnect();
  }
  
}