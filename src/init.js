import "regenerator-runtime";
import "dotenv/config";
import "./db";
import "./models/Word";
import "./models/RelatedWord";
import app from "./server.js";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ Server listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
