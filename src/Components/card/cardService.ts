import { NextFunction } from "express"
import bcrypt from 'bcrypt'
import dayjs from "dayjs";
import * as userRepository from "../user/userRepository"

export async function getCardHolderName(user_id:number){

  const user = await userRepository.findUser(user_id)
  
  if(!user){
    throw {type: "error_not_found", message: "user not found"}
  }

  const firstName = user.first_name.toUpperCase()
  const lastName = user.last_name.toUpperCase()
  const cardholderName = `${firstName} ${lastName}`

  // const nameUpperSplit = user.last_name.toUpperCase().split(" ")
  //   console.log(nameUpperSplit)
  // const slice = nameUpperSplit.slice(1,nameUpperSplit.length-1)
  //   console.log(slice)
  // const firstName = user.first_name.toUpperCase()
  //   console.log(firstName)
  // const lastName = nameUpperSplit[-1].toUpperCase()
  //   console.log(lastName)
  // const middleName = slice.filter(e => e.length > 3).map(e=> e[0]).join(" ")
  //   console.log(middleName)
  // const cardholderName = `${firstName} ${middleName} ${lastName}`
    console.log(cardholderName)

  return cardholderName
}

export function getExpirationDate(){

  const expirationDate = dayjs().add(5, 'year').format('MM/YY')

  return expirationDate
}