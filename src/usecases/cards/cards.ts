// import { PrismaClient } from '@prisma/client';

// // Crie uma instância do Prisma para ser usada nos testes
// const prisma = new PrismaClient();

// // Função para limpar o banco de dados de teste após cada teste
// async function clearDatabase() {
//   await prisma.cardBaralhos.deleteMany({});
//   await prisma.card.deleteMany({});
// }

// // Antes de todos os testes, execute as migrações e limpe o banco de dados
// beforeAll(async () => {
//   // Execute suas migrações aqui se necessário
//   await clearDatabase();where
// });

// // Após cada teste, limpe o banco de dados
// afterEach(async () => {
//   await clearDatabase();
// });

// // Após todos os testes, feche a conexão do Prisma
// afterAll(async () => {
//   await prisma.$disconnect();
// });

// describe('Testes de verificação de existência de card em baralho', () => {
//   it('Deve retornar verdadeiro se o card já existir em um baralho', async () => {
//     // Crie um card e um baralho
//     const card = await prisma.card.create({
//       data: {
//         // Inclua os detalhes do card aqui
//       },
//     });

//     const baralho = await prisma.baralho.create({
//       data: {
//         // Inclua os detalhes do baralho aqui
//         cards: {
//           connect: { id: card.id }, // Conecte o card ao baralho
//         },
//       },
//     });

//     // Agora, verifique se o card existe no baralho
//     const cardExisteNoBaralho = await prisma.baralho
//       .findUnique({
//         where: { id: baralho.id },
//       })
//       .cards({
//         where: { id: card.id },
//       });

//     expect(cardExisteNoBaralho.length).toBe(1); // Deve retornar 1 se o card existir no baralho
//   });

//   it('Deve retornar falso se o card não existir em um baralho', async () => {
//     // Crie um card sem conectá-lo a um baralho
//     const card = await prisma.card.create({
//       data: {
//         defaultcard()
//       },
//     });

//     // Agora, verifique se o card existe em um baralho
//     const cardExisteNoBaralho = await prisma.baralho
//       .findUnique({
//         where: { id: 'baralho_id_inexistente' }, // Forneça um ID de baralho inexistente
//       })
//       .cards({
//         where: { id: card.id },
//       });

//     expect(cardExisteNoBaralho.length).toBe(0); // Deve retornar 0 se o card não existir em um baralho
  
//     it('Deve adicionar com sucesso um novo card a um baralho existente', async () => {
//         // Crie um baralho
//         const baralho = await prisma.baralho.create({
//           data: {
//             // Inclua os detalhes do baralho aqui
//           },
//         });
    
//         // Crie um novo card
//         const novoCard = await prisma.card.create({
//           data: {
//             // Inclua os detalhes do novo card aqui
//           },
//         });
    
//         // Adicione o novo card ao baralho existente
//         await prisma.cardBaralhos.create({
//           data: {
//             baralho: { connect: { id: baralho.id } },
//             card: { connect: { id: novoCard.id } },
//           },
//         });
    
//         // Verifique se o card foi adicionado com sucesso ao baralho
//         const cardsNoBaralho = await prisma.baralho
//           .findUnique({
//             where: { id: baralho.id },
//           })
//           .cards();
    
//         expect(cardsNoBaralho.length).toBe(1); // Deve retornar 1 se o novo card estiver no baralho
//         expect(cardsNoBaralho[0].id).toBe(novoCard.id); // Verifique se o ID do card corresponde ao novo card
//     });
// });
