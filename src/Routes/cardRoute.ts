import { Router } from "express";
import * as cardController from "../Components/card/cardController";
import joiValidation from "../Middleware/joiValidation";
import { jwtValidation } from "../Middleware/jwtValidation";
import * as CardMiddleware from "../Middleware/cardMiddleware"

const router = Router();

//creates new card
router.post('/new-card', jwtValidation, CardMiddleware.checkLimit, cardController.newCard);

//getCards
router.get('/get-card', jwtValidation, cardController.getCards)

//deleteCard
router.delete('/delete-card', jwtValidation, CardMiddleware.checkCard, cardController.deleteCard)

//unblock card
router.post('/card/unblock', CardMiddleware.checkCard, CardMiddleware.checkIfUnblocked, passwordValidation, unblockCard)

// //block card
// router.post('/card/block', checkCard, CardMiddleware.checkIfBlocked, passwordValidation, blockCard)

export default router;