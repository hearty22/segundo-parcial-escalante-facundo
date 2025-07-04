import { Router } from "express";
import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} from "../controllers/book.controllers.js";

const router = Router();
// GET /books 
router.get("/books", getBooks);
// GET /books/:id 
router.get("/books/:id", getBookById);
// POST /books 
router.post("/books", createBook);
// PUT /books/:id 
router.put("/books/:id", updateBook);
// DELETE /books/:id 
router.delete("/books/:id", deleteBook);
export default router;
