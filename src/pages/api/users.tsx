import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  try {
    const userCount = await prisma.users.count();
    res.status(200).json({ userCount });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar a quantidade de usuários.' });
  } finally {
    await prisma.$disconnect();
  }
  
}
