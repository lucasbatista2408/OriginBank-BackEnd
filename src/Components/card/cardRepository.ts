import client from "../../../db_strategy/database";
import { cardData } from "../../Types/cardTypes";


export async function newCard(card:cardData){

  const response = await client.cards.create({data: card})

  return response
}