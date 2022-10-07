import { Router } from "express";
import * as transactionController from "../Components/transactions/transactionController"


const router = Router();

router.post('/new-tr', transactionController.createTransaction)

router.get('last-tr', transactionController.getLastTransaction)

export default router;