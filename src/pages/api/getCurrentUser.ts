import { NextApiRequest, NextApiResponse } from 'next';
import prisma from './_base';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user = await prisma.users.findFirst({
      where:{
        id: 14
      }
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar a quantidade de usuários.' });
  } finally {
    await prisma.$disconnect();
  }
  
}
