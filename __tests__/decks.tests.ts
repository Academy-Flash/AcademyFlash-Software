import prisma from '../src/pages/api/_base'
  
describe('Decks', () => {
    // function to get a deck
    const getDeck = async (id: number) => {
      return await prisma.decks.findUnique({
        where: {
          id: id
        }
      });
    }

    // function to create a deck
    const createDeck = async (id: number, deck_name: string, rating: number, category: string, description: string) => {
      return await prisma.decks.create({
        data: {
            id : id,
            deck_name: deck_name,
            rating: rating,
            category: category,
            description: description,
        },
      });
    }

    // function to delete a deck
    const deleteDeck = async (id: number) => {
      return await prisma.decks.delete({
        where: {
          id: id
        }
      });
    }

    // In the beginning of every test, delete the deck created
    beforeEach(async () => {
        try{
          await deleteDeck(999);
        }catch(err){
          // Do nothing
        }
    });

    // After every test, delete the deck created
    afterEach(async () => {
        try{
          await deleteDeck(999);
        }catch(err){
          // Do nothing
        }
    });


    // Create a deck
    it('should create a deck', async () => {
      expect.assertions(1);
      const result = await prisma.decks.create({
        data: {
            id : 999,
            deck_name: "Deck Teste",
            rating: 5,
            category: "Categoria Teste",
            description: "Descrição Teste",
        },
      });
      const expectedResult = {
        id : 999,
        deck_name: "Deck Teste",
        rating: 5,
        category: "Categoria Teste",
        description: "Descrição Teste",
      };

      expect(result).toEqual(expectedResult);

      await deleteDeck(999);
    });

    // Get the deck created

    it('should get the deck created', async () => {
      expect.assertions(1);

      await createDeck(999, "Deck Teste", 5, "Categoria Teste", "Descrição Teste");

      const result = await prisma.decks.findUnique({
        where: {
          id: 999
        }
      });
      const expectedResult = {
        id : 999,
        deck_name: "Deck Teste",
        rating: 5,
        category: "Categoria Teste",
        description: "Descrição Teste",
      };
      expect(result).toEqual(expectedResult);

      await deleteDeck(999);
    });

    // Update the deck created

    it('should update the deck created', async () => {
        expect.assertions(1);

        await createDeck(999, "Deck Teste", 5, "Categoria Teste", "Descrição Teste");

        const result = await prisma.decks.update({
            where: {
                id: 999
            },
            data: {
                deck_name: "Deck Teste Update",
                rating: 5,
                category: "Categoria Teste Update",
                description: "Descrição Teste Update",
            }
        });
        const expectedResult = {
            id : 999,
            deck_name: "Deck Teste Update",
            rating: 5,
            category: "Categoria Teste Update",
            description: "Descrição Teste Update",
        };
        expect(result).toEqual(expectedResult);

        await deleteDeck(999);
    });

    // Delete the deck created

    it('should delete the deck created', async () => {
        expect.assertions(1);

        await createDeck(999, "Deck Teste", 5, "Categoria Teste", "Descrição Teste");
        
        const result = await prisma.decks.delete({
            where: {
            id: 999
            }
        });
        const expectedResult = {
            id : 999,
            deck_name: "Deck Teste",
            rating: 5,
            category: "Categoria Teste",
            description: "Descrição Teste",
        };
        expect(result).toEqual(expectedResult);
    });

});