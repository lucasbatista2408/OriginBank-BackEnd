import joi from "joi";

export const signinSchema = joi.object({
	cpf: joi.number().required(),
	password: joi.string().min(4).required(),
});

export const signupSchema = joi.object({
  first_name: joi.string().required(),
  last_name: joi.string().required(),
  email: joi.string().email().required(),
  cpf: joi.string().required(),
  dob: joi.string().required(),
  password: joi.string().min(4).required(),
  confirm: joi.ref("password")
})