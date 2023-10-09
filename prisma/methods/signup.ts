import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

interface SignupInput {
    name: string;
    email: string;
    password: string;
}

async function hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
}

async function signup(input: SignupInput) {
    const { name, email, password } = input;

    // Check if email is valid
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
        throw new Error('Email is invalid');
    }

    // Check if password is valid
    if (password.length < 8) {
        throw new Error('Password must be 8 characters or longer');
    }

    // Check if password is strong
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!passwordRegex.test(password)) {
        throw new Error('Password must contain at least one uppercase letter, one lowercase letter, and one number');
    }

    // Check if name is valid
    if (name.length < 2) {
        throw new Error('Name must be 2 characters or longer');
    }

    // Check if name is valid (can't contain numbers)
    const nameRegex = /^[a-zA-Z]+$/;

    if (!nameRegex.test(name)) {
        throw new Error('Name must contain only letters');
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    if (existingUser) {
        throw new Error('User already exists');
    }

    // Hashing password

    const hashedPassword = await hashPassword(password);

    // Create new user
    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    return newUser;
}