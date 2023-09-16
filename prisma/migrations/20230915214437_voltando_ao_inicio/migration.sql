/*
  Warnings:

  - Added the required column `difficulty` to the `cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cards" DROP COLUMN "difficulty",
ADD COLUMN     "difficulty" INTEGER NOT NULL;
