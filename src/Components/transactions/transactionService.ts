import { Request, Response, NextFunction} from "express";
import { transactionData } from "../../Types/transactionTYpes";
import * as transactionRepository from "./transactionRepository"


export async function createTransaction(transaction:transactionData){
  
  const response = await transactionRepository.createTransaction(transaction)

  if(!response){
    throw { type: "bad_request", message: "could not create transaction" };
  }

  return response
}