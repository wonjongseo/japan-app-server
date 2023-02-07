import express from "express";
import { getJlptByLevel } from "../controller/jlptController";

const jlptLevelRouter = express.Router();
jlptLevelRouter.get("/:level", getJlptByLevel);

export default jlptLevelRouter;
