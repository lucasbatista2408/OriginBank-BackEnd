import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function jwtValidation(req:Request, res:Response, next:NextFunction){

	const {authorization} = req.headers;
	const token = authorization?.replace("Bearer ", "");
	console.log(token);
	console.log(req.headers)

	if(!token){
		throw {type:"unauthorized", message: "token missing"};
	}

	const secret_key = String(process.env.SECRET_KEY);
	console.log(secret_key)

	jwt.verify(token, secret_key, (err:any, userId:any) =>{
		if(err){
			console.log(err)
			res.status(403).send("invalid token")
		} 
		res.locals.userId = parseInt(userId);
		next();
	});
}