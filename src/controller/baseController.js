import Word from "../models/Word";

export const getAllWordsAndCnt = async (req, res, next) => {
  const allWords = [
    "ga",
    "na",
    "da",
    "ra",
    "ma",
    "ba",
    "sa",
    "a",
    "ja",
    "tya",
    "ka",
    "ta",
    "pa",
    "ha",
    "acc",
  ];

  const allWordsAndCnt = {};

  for (let i = 0; i < allWords.length; i++) {
    const firstWord = allWords[i];
    const firstWords = await Word.find({ firstWord });
    allWordsAndCnt[firstWord] = firstWords.length;
  }

  console.log(allWordsAndCnt);

  return res.json(allWordsAndCnt);
};
