import { Request, Response, NextFunction } from "express";
import { users } from "@prisma/client";
import * as userService from "../Components/user/userService"

export async function checkUser(req: Request, res: Response, next: NextFunction){

  const cpf = Number(req.body.cpf)

  await userService.checkUser(cpf);

  next()
}