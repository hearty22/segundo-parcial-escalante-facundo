import express from "express";
import { status } from "./src/models/book.model.js";
import { bookModel } from "./src/models/book.model.js";
import { deleteBook, getBooks } from "./src/controllers/book.controllers.js";
import router from "./src/routes/book.routes.js";

deleteBook

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send(bookModel, status)
})
app.use(express.json())





app.use("/books", router);



app.listen(PORT, () => {
  console.log(`servidor corriendo en http://localhost:${PORT}`)
})