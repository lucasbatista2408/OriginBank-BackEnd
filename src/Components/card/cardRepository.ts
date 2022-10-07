import client from "../../../db_strategy/database";
import { card, cardData } from "../../Types/cardTypes";


export async function newCard(card:cardData){

  const response = await client.cards.create({data: card})

  return response
}

export async function findById(cardId:number){

  const response:card = await client.cards.findUnique({
    where:{
      id: cardId
    }
  })

  return response
}