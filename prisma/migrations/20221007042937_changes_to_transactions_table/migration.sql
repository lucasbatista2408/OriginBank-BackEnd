/*
  Warnings:

  - You are about to drop the column `to_user_id` on the `transactions` table. All the data in the column will be lost.
  - Added the required column `description` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_to_user_id_fkey";

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "to_user_id",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
