import { Request, Response, NextFunction} from "express";
import * as cardServices from '../Components/card/cardService'

export async function checkCard(req: Request, res: Response, next:NextFunction){

  const data = Object(req.body)

  const card = await cardServices.checkIfCardExists(data.cardId)

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