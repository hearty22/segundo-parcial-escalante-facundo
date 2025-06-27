import express from "express";
import { status } from "./src/models/book.model.js";
import { bookModel } from "./src/models/book.model.js";
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send(bookModel)
})




app.listen(PORT, () => {
  console.log(`servidor corriendo en http://localhost:${PORT}`)
})