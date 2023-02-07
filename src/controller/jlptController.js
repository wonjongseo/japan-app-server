import { async } from "regenerator-runtime";
import { books, wordCntObj, workbook } from "../excelData";
import RelatedWord from "../models/RelatedWord";
import Word from "../models/Word";



export const getJlptByLevel = async (req, res, next) => {
  const { level } = req.params;

  const temps = await Word.find({ level });

  let newTemps = [];
  for (let i = 0; i < temps.length; i++) {
    if (
      temps[i].level === undefined ||
      temps[i].level === null ||
      temps[i].level === ""
    )
      continue;

    const aa = await RelatedWord.find({ level: temps[i].level });
    newTemps.push(aa);
  }

  return res.json(newTemps);
};
