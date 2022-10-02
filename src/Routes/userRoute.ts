import { Router } from "express";
import joiValidation from "../Middleware/joiValidation";
import * as passwordUtils from "../Utils/passwordUtils"
import * as userSchema from "../Schemas/userSchema"
import { checkUser, checkLogin } from "../Middleware/userMiddleware";
import * as userController from "../Components/user/userController"

const router = Router();

router.post('/signup', joiValidation(userSchema.signupSchema), checkUser, passwordUtils.passwordEncrypt, userController.createUser)

router.post('/signin', joiValidation(userSchema.signinSchema), checkLogin, passwordUtils.passwordValidation, userController.signinUser)

export default router;