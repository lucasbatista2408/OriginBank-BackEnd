import { Router } from "express";
import userRoute from "../Routes/userRoute"

const router = Router(); 

router.use(userRoute)

export default router;