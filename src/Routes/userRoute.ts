import { Router } from "express";
import joiValidation from "../Middleware/joiValidation";
import * as passwordUtils from "../Utils/passwordUtils"
import * as userSchema from "../Schemas/userSchema"

const router = Router();

router.post('/signup', joiValidation(userSchema.signupSchema), passwordUtils.passwordEncrypt, )

router.post('/signin', joiValidation(userSchema.signinSchema), passwordUtils.passwordValidation)

export default router;