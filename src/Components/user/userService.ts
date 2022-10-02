import { Request, Response, NextFunction } from "express";
import * as userRepository from "../user/userRepository"
import jwt from "jsonwebtoken";
import { userData } from "../../Types/userTypes";

export async function checkUser(cpf:string){

  const response = await userRepository.checkUser(cpf)
  
  if(response){
    throw {type:"conflict", message: "You already have an account"}
  }
}

export async function checkLogin(cpf:string){

  const response = await userRepository.checkLogin(cpf)

  if(!response){
    throw {type:"not found", message: "User Not Found"}
  }

  return response
}

export async function createUser(user:userData, password:string){


  const userData:userData = {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    cpf: user.cpf,
    dob: user.dob,
    password,
  }

  const response = await userRepository.createUser(userData)

	if (!response) {
		throw { type: "bad_request", message: "could not create new user" };
	}

  return response

}

export function signinUser(id: string, name:string, key: string) {
	const token = jwt.sign({id, name}, key);

	console.log(token);

	return {token, name, id};
}