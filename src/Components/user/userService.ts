import { Request, Response, NextFunction } from "express";
import * as userRepository from "../user/userRepository"

export async function checkUser(cpf:number){

  const response = await userRepository.checkUser(cpf)

  if(response){
    throw {type:"conflict", message: "You already have an account"}
  }

}