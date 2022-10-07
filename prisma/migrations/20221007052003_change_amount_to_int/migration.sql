/*
  Warnings:

  - Changed the type of `amount` on the `payments` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `amount` on the `transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "payments" DROP COLUMN "amount",
ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "amount",
ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL;
