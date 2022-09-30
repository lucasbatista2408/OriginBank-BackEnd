import joi from "joi";

export const signinSchema = joi.object({
	cpf: joi.number().required(),
	password: joi.string().min(4).required(),
});

export const signupSchema = joi.object({
  firstName: joi.string().required(),
  secondName: joi.string().required(),
  email: joi.string().email().required(),
  securityNumber: joi.number().min(11).max(11).required(),
  dob: joi.string().required(),
  password: joi.string().min(4).required(),
  confirm: joi.ref("password")
})