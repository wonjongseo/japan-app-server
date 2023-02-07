
import mongoose from "mongoose";

const JlptWordSchema = new mongoose.Schema({
  id: { type: String },
  kangi: { type: String },
  mean: { type: String },
  undoc: { type: String },
  hundoc: { type: String },
  level: { type: String },
  firstJlptWord: { type: String },
  createdAt: { type: Date, required: true, default: Date.now },
});

const JlptWord = mongoose.model("JlptWord", JlptWordSchema);

export default JlptWord;
