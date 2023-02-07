import express from "express";
import japanRouter from "./routes/relatedWordsRouter";
import kangiRouter from "./routes/wordsRouter";
import morgan from "morgan";
import { getAllWordsAndCnt } from "./controller/baseController";
import jlptLevelRouter from "./routes/jlptLevelRouter";

const app = express();

// app.use(paginate.middleware(10, 50));
app.use(morgan("dev"));

app.get("/all-words", getAllWordsAndCnt);
app.use("/related", japanRouter);
app.use("/words", kangiRouter);
app.use("/jlpt", jlptLevelRouter);

export default app;
