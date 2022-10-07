import { NextFunction } from "express"
import bcrypt from 'bcrypt'
import dayjs from "dayjs";
import * as userRepository from "../user/userRepository"

export async function getCardHolderName(user_id:number){

  const user = await userRepository.findUser(user_id)
  
  if(!user){
    throw {type: "error_not_found", message: "user not found"}
  }

  const nameUpperSplit = user.last_name.toUpperCase().split(" ")
  const slice = nameUpperSplit.slice(1,nameUpperSplit.length-1)
  const firstName = user.first_name.toUpperCase()
  const lastName = nameUpperSplit[-1].toUpperCase()
  const middleName = slice.filter(e => e.length > 3).map(e=> e[0]).join(" ")

  const cardholderName = `${firstName} ${middleName} ${lastName}`
  
  return cardholderName
}

export function getExpirationDate(){

  const expirationDate = dayjs().add(5, 'year').format('MM/YY')

  return expirationDate
}