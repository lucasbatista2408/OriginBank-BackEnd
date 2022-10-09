import {Request, Response} from 'express'
import { faker } from '@faker-js/faker';
import * as cardRepository from './cardRepository';
import * as cardServices from './cardService'
import { cardData } from '../../Types/cardTypes';
import client from '../../../db_strategy/database';
import { objectEnumValues } from '@prisma/client/runtime';

export async function newCard(req: Request, res: Response){

  const number = faker.finance.creditCardNumber('visa');
  console.log(number)
  const security_code = parseInt(faker.finance.creditCardCVV())
  const password = faker.random.numeric(4)
  const blocked = true;
  const user_id = res.locals.userId

  const holder_name = await cardServices.getCardHolderName(user_id)
  console.log(holder_name)
  const expiration_date = cardServices.getExpirationDate()
  console.log(expiration_date)


  const card:cardData = {
    number,
    user_id,
    holder_name,
    security_code,
    expiration_date,
    password,
    blocked,
    }

    console.log(card)

  const response = await cardRepository.newCard(card)

  res.status(201).send(response)
  
}

export async function getCards(req: Request, res: Response){
  
  const user_id = res.locals.userId

  const response = await client.cards.findMany({
    where:{
      user_id,
    }
  })

 response.forEach(value => {
    return value.number = value.number.replace(/-/g,'')
  })

  res.status(200).send(response)
}