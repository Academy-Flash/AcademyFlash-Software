import { PrismaClient } from '@prisma/client';
import AuthService from './AuthService';

describe('AuthService', () => {
    let prisma: PrismaClient;
    let authService: AuthService;

    beforeAll(async () => {
        prisma = new PrismaClient();
        authService = new AuthService(prisma);
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    beforeEach(async () => {
        // Limpar dados de teste após cada teste
        await prisma.user.deleteMany({});
    });

    it('deve autenticar um usuário válido', async () => {
        // Crie um usuário de teste no banco de dados
        const user = await prisma.user.create({
            data: {
                username: 'usuario@gmail.com',
                password: 'senha',
            },
        });

        const result = await authService.login('usuario@gmail.com', 'senha');
        expect(result).toBe(true);
    });

    it('não deve autenticar um usuário inválido', async () => {
        // Crie um usuário de teste no banco de dados
        await prisma.user.create({
            data: {
                username: 'usuario@gmail.com',
                password: 'senha',
            },
        });

        const result = await authService.login('usuario@gmail.com', 'senha_incorreta');
        expect(result).toBe(false);
    });

    it('deve fazer logout corretamente', async () => {
        // Crie um usuário de teste no banco de dados
        await prisma.users.create({
            data: {
                username: 'usuario@gmail.com',
                password: 'senha',
            },
        });

        await authService.login('usuario@gmail.com', 'senha');
        authService.logout();
        const isLoggedIn = await authService.isLoggedIn();
        expect(isLoggedIn).toBe(false);
    });
});

class AuthService {
    constructor(private prisma: PrismaClient) {}

    async login(username: string, password: string): Promise<boolean> {
        const user = await this.prisma.user.findUnique({
            where: {
                username,
            },
        });

        if (user && user.password === password) {
            return true;
        }

        return false;
    }

    async logout(): Promise<void> {
        // Implementação do logout
    }

    async isLoggedIn(): Promise<boolean> {
        // Implementação do isLoggedIn
    }
}
