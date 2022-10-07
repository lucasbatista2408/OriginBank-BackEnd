import {Request, Response} from 'express'
import { faker } from '@faker-js/faker';
import * as cardRepository from './cardRepository';
import * as cardServices from './cardService'
import { cardData } from '../../Types/cardTypes';

export default async function newCard(req: Request, res: Response){

  const number = parseInt(faker.finance.creditCardNumber());
  const security_code = parseInt(faker.finance.creditCardCVV())
  const password = faker.random.numeric(4)
  const blocked = true;
  const user_id = res.locals.userId

    const holder_name = await cardServices.getCardHolderName(user_id)
    const expiration_date = cardServices.getExpirationDate()


  const card:cardData = {
    number,
    user_id,
    holder_name,
    security_code,
    expiration_date,
    password,
    blocked,
    }

  const response = await cardRepository.newCard(card)

  res.status(201).send(response)
  
}