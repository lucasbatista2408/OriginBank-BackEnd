import client from "../../../db_strategy/database";
import { userData } from "../../Types/userTypes";

export async function checkUser(cpf:number){

  const response = await client.users.findUnique({
    where: {
      cpf: cpf
    }
  })

  return response
}

export async function createUser(user:userData){

  const response = await client.users.create({data:user})

  return response
}

export async function checkLogin(cpf:number){

  const response = await client.users.findUnique({
    where: {
      cpf: cpf
    }
  })

  return response
}