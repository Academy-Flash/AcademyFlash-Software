// create a test to check if the database is connected
import prisma from '../src/pages/api/_base'


describe('Database', () => {
  it('should connect to the database', async () => {
    expect.assertions(1);
    const result = await prisma.$queryRaw`SELECT 1+1 AS result;`
    const expectedResult = [{ result: 2 }];
    expect(result).toEqual(expectedResult);
  });
});



  // Create a card

/*   it('should create a card', async () => {
    expect.assertions(1);
    const result = await prisma.cards.create({
      data: {
        question: "Pergunta teste",
        answer: "Resposta Teste",
        id_deck: "",
        difficulty: number,
        rating: number,
      },
    });
    const expectedResult = {
      name: 'test',
      description: 'test',
      image: 'test',
      price: 1,
      stock: 1,
      category: 'test',
    };
    expect(result).toEqual(expectedResult);
  }); */

  
