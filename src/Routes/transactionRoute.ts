import { Router } from "express";
import * as transactionController from "../Components/transactions/transactionController"
import { jwtValidation } from "../Middleware/jwtValidation";


const router = Router();

router.post('/new-tr', jwtValidation, transactionController.createTransaction)

router.get('/last-tr', jwtValidation, transactionController.getLastTransaction)

router.get('/all-tr', jwtValidation, transactionController.getAllTransactions)

router.get('/last-dp', jwtValidation, transactionController.getLastDeposit)

router.get('/last-transfer', jwtValidation, transactionController.getLastTransfer)

export default router;