-- AlterTable
ALTER TABLE "cards" ALTER COLUMN "difficulty" DROP NOT NULL,
ALTER COLUMN "difficulty" SET DATA TYPE VARCHAR(255);
