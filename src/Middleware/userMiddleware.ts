import { Request, Response, NextFunction } from "express";
import { users } from "@prisma/client";
import * as userService from "../Components/user/userService"

export async function checkUser(req: Request, res: Response, next: NextFunction){

  const cpf = Number(req.body.cpf)

  await userService.checkUser(cpf);

  next()
}

export async function checkLogin(req: Request, res: Response, next: NextFunction){
  
  const cpf = Number(req.body.cpf)

  const response:users = await userService.checkLogin(cpf);

  res.locals.id = response.id;
  res.locals.password = response.password;
  res.locals.name = response.first_name

  next()
}