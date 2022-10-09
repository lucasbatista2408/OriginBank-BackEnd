import { NextFunction } from "express"
import bcrypt from 'bcrypt'
import dayjs from "dayjs";
import * as userRepository from "../user/userRepository"
import * as cardRepository from "../card/cardRepository"
import { cards } from "@prisma/client";
import { card } from "../../Types/cardTypes";

export async function getCardHolderName(user_id:number){

  const user = await userRepository.findUser(user_id)
  
  if(!user){
    throw {type: "error_not_found", message: "user not found"}
  }

  const firstName = user.first_name.toUpperCase()
  const lastName = user.last_name.toUpperCase()
  const cardholderName = `${firstName} ${lastName}`

  return cardholderName
}

export function getExpirationDate(){

  const expirationDate = dayjs().add(5, 'year').format('MM/YY')

  return expirationDate
}

export async function checkIfCardExists(cardId:number){

  const card:card = await cardRepository.findById(cardId)

  //check if cards exists
  if(!card){
    throw {type: "error_not_found", message: "card not found"}
  }

  return card
}

export async function checkLimit(user_id:number){

  const response = await cardRepository.checkLimit(user_id)

  if(response.length === 3){
    throw {type: "unprocessable", message: "you can't ask for more cards"}
  }
}