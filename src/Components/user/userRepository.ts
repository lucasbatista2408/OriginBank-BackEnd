import client from "../../../db_strategy/database";
import { userData } from "../../Types/userTypes";

export async function checkUser(cpf:string){

  const response = await client.users.findUnique({
    where: {
      cpf: cpf
    }
  })

  return response
}

export async function findUser(user_id:number){

  const response = await client.users.findUnique({
    where: {
      id: user_id
    }
  })

  return response
}

export async function createUser(userData:userData){

  const response = await client.users.create({data:userData})

  return response
}

export async function checkLogin(cpf:string){

  const response = await client.users.findUnique({
    where: {
      cpf: cpf
    }
  })

  return response
}