import { NextFunction, Request, Response } from "express";


export default function errorHandlingMiddleware (error: any, req: Request, res: Response, next: NextFunction) {
	
	if (error.type === "not found") {
		return res.status(404).send(error.message);
	}
	if (error.type === "unprocessable") {
		return res.status(422).send(error.message);
	}
	if (error.type === "conflict") {
		return res.status(409).send(error.message);
	}
	if(error.type === "forbidden"){
		return res.status(403).send(error.message);
	}
	if(error.type === "could_not_update" || error.type === "bad_request"){
		return res.status(400).send(error.message);
	}

	res.sendStatus(500); 
}