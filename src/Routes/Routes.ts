import { Router } from "express";
import userRoute from "../Routes/userRoute"
import cardRoute from "../Routes/cardRoute"

const router = Router(); 

router.use(userRoute)
router.use(cardRoute)

export default router;