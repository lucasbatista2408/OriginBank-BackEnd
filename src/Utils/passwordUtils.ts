import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv"
import bcrypt from "bcrypt";
import Cryptr from "cryptr";

dotenv.config();

const secret = String(process.env.CRYPTR)
const cryptr = new Cryptr(secret);

export function passwordEncrypt(req:Request, res:Response, next:NextFunction){

	const password:string = req.body.password;

	const encrypted_password = bcrypt.hashSync(password, 10);

	res.locals.encrypted = encrypted_password;

	next();
}

export function passwordValidation(req:Request, res:Response, next:NextFunction){

	const localpw:string = req.body.password;

	const password_db:string = res.locals.password;

	const validation = bcrypt.compareSync(localpw, password_db);
	console.log(validation);

	if(!validation){
		throw {type: "forbidden", message: "wrong password"};
	}

	next();
}

export function cryptrEncrypt(req:Request, res:Response, next:NextFunction){

	const pw = String(req.body.password);
  
	const password = cryptr.encrypt(pw);

	res.locals.password = password;

	next();
}

export function cryptrDecrypt(password:string){
	const decrypted = cryptr.decrypt(password);

	return decrypted;
}