import client from "../../../db_strategy/database";

export async function checkUser(cpf:number){

  const response = await client.users.findUnique({
    where: {
      cpf: cpf
    }
  })

  return response
}