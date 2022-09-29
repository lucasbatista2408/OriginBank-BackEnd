import express from "express";
import "express-async-errors";
import cors from "cors";
import router from "../src/Routes/Routes";
import errorHandlingMiddleware from "../src/Middleware/errorHandler";

const app = express();

app.use(express.json());
app.use(cors());


app.use(router);
app.use(errorHandlingMiddleware);
app.use(router);

export default app;