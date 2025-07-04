import express from "express";
import { status } from "./src/config/db.js";
import { bookModel } from "./src/models/book.model.js";
import router from "./src/routes/book.routes.js";


const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send(bookModel(), status())
})
app.use(express.json())

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`servidor corriendo en http://localhost:${PORT}`)
})