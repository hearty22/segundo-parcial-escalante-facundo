import express from "express";
import { status } from "./src/models/book.model.js";
import { bookModel } from "./src/models/book.model.js";
import { getBooks } from "./src/controllers/book.controllers.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send(bookModel, status)
})
app.use(express.json())



app.listen(PORT, () => {
  console.log(`servidor corriendo en http://localhost:${PORT}`)
})