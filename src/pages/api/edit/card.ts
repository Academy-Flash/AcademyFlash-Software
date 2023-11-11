import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../_base'; // Ajuste este caminho conforme necessário

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const cardId = Number(req.body.id);

    const updatedData = {
        question: req.body.question,
        answer: req.body.answer,
        difficulty: req.body.difficulty,
        rating: req.body.rating
      };
      

    const updatedCard = await prisma.cards.update({
      where: { id: cardId },
      data: updatedData,
    });

    res.status(200).json(updatedCard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o card.' });
  } finally {
    await prisma.$disconnect();
  }
}
