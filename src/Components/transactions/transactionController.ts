import { Request, Response } from "express";
import dayjs from "dayjs"
import client from "../../../db_strategy/database";


export async function createTransaction(req:Request, res:Response){

  const date = dayjs().format('DD/MM');

  const {user_id, 
  description,
  type,
  amount} = req.body

  const transaction = {user_id, 
  description,
  date,
  type,
  amount}

  console.log(transaction)

  const response = await client.transactions.create({data: transaction})
  console.log(response)

  return res.status(201).send(response)
}

export async function getLastTransaction(req:Request, res:Response){

  const user_id = 1

  const response = await client.transactions.findMany({
    where:{
      user_id
    }
  })

  return response
}