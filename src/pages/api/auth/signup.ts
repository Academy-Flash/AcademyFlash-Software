import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../_base'; 
import bcrypt from 'bcryptjs'; // Para hash e comparação de senha
import jwt from 'jsonwebtoken'; // Para gerar token JWT

export default async function handler(req: { method: string; body: { email: any; password: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message?: string; token?: never; }): void; new(): any; }; }; }) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    // Encontrar o usuário pelo e-mail
    where: { email: email },


    // Verificar se o usuário existe e a senha está correta
    if (user && bcrypt.compareSync(password, user.password)) {
      // Gerar um token JWT (ajuste com suas chaves e configurações)
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      // Enviar resposta de sucesso com o token
      res.status(200).json({ token: token });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
