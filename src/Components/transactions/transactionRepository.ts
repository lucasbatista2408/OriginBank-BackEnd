import { transactions } from "@prisma/client";
import client from "../../../db_strategy/database";
import { transactionData } from "../../Types/transactionTYpes";


export async function createTransaction(transaction:transactionData){

  const response:transactions = await client.transactions.create({data: transaction})

  if(!response){
    throw { type: "bad_request", message: "could not create transaction" };
  }

  return response
}