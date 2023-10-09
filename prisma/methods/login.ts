import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

interface LoginInput {
    email: string;
    password: string;
}

async function login(input: LoginInput) {
    const { email, password } = input;

    // Procurar o usuário pelo email
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        throw new Error('User not found');
    }

    // Verificar a senha
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        throw new Error('Incorrect password');
    }

    return user;
}
