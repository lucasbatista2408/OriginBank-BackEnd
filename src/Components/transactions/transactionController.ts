import { Request, Response } from "express";
import dayjs from "dayjs"
import client from "../../../db_strategy/database";
import * as transactionService from "./transactionService"
import { transactionData } from "../../Types/transactionTYpes";


export async function createTransaction(req:Request, res:Response){

  const user_id = res.locals.userId

  const date = dayjs().format('DD/MM');

  const { 
  description,
  type,
  amount} = req.body

  const transaction:transactionData = {user_id, 
  description,
  date,
  type,
  amount}

  const response = await transactionService.createTransaction(transaction)

  return res.status(201).send(response)
}

export async function getLastTransaction(req:Request, res:Response){

  const user_id = res.locals.userId

  const response = await client.transactions.findMany({
    where:{
      user_id
    }
  })

  const last = response[response.length-1]

  return res.status(200).send(last)
}

export async function getAllTransactions(req:Request, res:Response){

  const user_id = res.locals.userId

  const response = await client.transactions.findMany({
    where:{
      user_id
    },
    take: 10,
    orderBy: {
      date: 'desc',
    }
  })

  console.log(typeof([response]))
  return res.status(200).send(response)
}

export async function getLastDeposit(req:Request, res:Response){

  const user_id = res.locals.userId

  
}