import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

  await prisma.users.deleteMany({});

  const alice = await prisma.users.create({
    data: {
        username: "alice",
        email: "alice@teste.com",
        hashed_password: "Ksj9#42ka"
    }
  })

  const bob = await prisma.users.create({
    data: {
        username: "bob",
        email: "bob@teste.com",
        hashed_password: "Ksj9#42ka"
    }
  })
  
  console.log({ alice })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })