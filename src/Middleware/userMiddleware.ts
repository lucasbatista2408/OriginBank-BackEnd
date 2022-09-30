import { Request, Response, NextFunction } from "express";


export async function checkUser(req: Request, res: Response, next: NextFunction){

  const cpf = Number(req.body.cpf)
  
}