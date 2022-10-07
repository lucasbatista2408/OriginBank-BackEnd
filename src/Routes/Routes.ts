import { Router } from "express";
import userRoute from "../Routes/userRoute"
import cardRoute from "../Routes/cardRoute"
import transactionRoute from "../Routes/transactionRoute"

const router = Router(); 

router.use(userRoute)
router.use(cardRoute)
router.use(transactionRoute)

export default router;