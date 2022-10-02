import { Request, Response, NextFunction } from "express";
import { userData } from "../../Types/userTypes";
import * as userServices from "../user/userService"

export async function createUser(req: Request, res: Response){

  const user:userData = req.body;

	const response = await userServices.createUser(user)

  res.status(201).send(response)
}

export function signinUser(req: Request, res: Response) {
	const access_key = String(process.env.SECRET_KEY);
	const id = String(res.locals.id);
  const name = String(res.locals.name)

	const token = userServices.signinUser(id, name, access_key);

	res.status(200).send(token);
}