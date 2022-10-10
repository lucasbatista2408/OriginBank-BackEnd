import { Request, Response, NextFunction} from "express";
import * as cardServices from '../Components/card/cardService'

export async function checkCard(req: Request, res: Response, next:NextFunction){
  
  const {id} = req.body

  console.log(id)

  const card = await cardServices.checkIfCardExists(id)

  res.locals.userId = card.user_id;
  res.locals.cardId = card.id;
  res.locals.password = card.password
  res.locals.expirationDate = card.expiration_date
  res.locals.isBlocked = card.blocked
  res.locals.securityCode = card.security_code
  res.locals.cardholderName = card.holder_name
  res.locals.number = card.number

  next()
}

export async function checkLimit(req: Request, res: Response, next:NextFunction){

  const user_id = res.locals.userId

  await cardServices.checkLimit(user_id)

  next()
}

export async function checkIfUnblocked(req: Request, res: Response, next:NextFunction){
  const {id} = req.body

  await cardServices.checkIfUnblocked(id)

  next()
}

export async function checkIfBlocked(req: Request, res: Response, next:NextFunction){
  const {id} = req.body

  await cardServices.checkIfBlocked(id)

  next()
}