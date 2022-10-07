import { Router } from "express";
import newCard from "../Components/card/cardController";
import joiValidation from "../Middleware/joiValidation";
import { jwtValidation } from "../Middleware/jwtValidation";
import * as CardMiddleware from "../Middleware/cardMiddleware"

const router = Router();

//creates new card
router.post('/new-card', jwtValidation, newCard);

// //unblock card
// router.post('/card/unblock', checkCard, CardMiddleware.checkIfUnblocked, passwordValidation, unblockCard)

// //block card
// router.post('/card/block', checkCard, CardMiddleware.checkIfBlocked, passwordValidation, blockCard)