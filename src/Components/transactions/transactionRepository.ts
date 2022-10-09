import { Prisma, transactions } from "@prisma/client";
import client from "../../../db_strategy/database";
import { transactionData } from "../../Types/transactionTYpes";


export async function createTransaction(transaction:transactionData){
  console.log(transaction)

  try {
    const response = await client.transactions.create({data: transaction})
    console.log(response)
    return response
  } catch (e) {
    if (e instanceof Prisma.PrismaClientValidationError) {
      console.log(e)
      }
    }
}