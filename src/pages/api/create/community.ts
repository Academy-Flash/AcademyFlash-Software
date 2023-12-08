import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../_base';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
    
    try {
        const community = await prisma.communities.create({
            data: {
                community_name: req.body.communityName,
                description: req.body.description,
                date_creation: new Date(),
                user_count: 1,
                card_count: 0,
                // URL_image: req.body.image,
            }
        })    

        const comuser = await prisma.community_users.create({
            data: {
                id_user: req.body.user_id,
                id_community: community.id
            }
        });
    
        res.status(200).json( {ok: true} );
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar uma comunidade' });
    } finally {
        await prisma.$disconnect();
    }
    
}

